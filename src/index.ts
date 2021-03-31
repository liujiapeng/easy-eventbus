interface NormalObject<T> {
  [key: string]: T
}

type IFn = (params?: NormalObject<any>) => unknown

type IEvent = NormalObject<IFn>

/**
 *  EventBus 事件总线
 */
class EventBus {
  private static intance: EventBus | null = null // 唯一实例

  private events: IEvent = {} // 任务列表

  private max = 20 // 最大任务数

  private counts = 0 // 当前任务数

  private constructor() {
    return this
  }

  /**
   *  获取唯一实例
   * @returns {EventBus}
   */
  static getInstance(): EventBus {
    if (this.intance === null) {
      this.intance = new EventBus()
    }
    return this.intance
  }

  /**
   *  监听任务
   * @param ev
   * @param excute
   * @returns {EventBus} 当前实例
   */
  public on(ev: string, excute: IFn): EventBus {
    if (this.counts > this.max) {
      throw new Error('counts of event out of limit , may cause unknown memory error')
    }
    this.events[ev] = excute
    this.counts += 1
    return this
  }

  /**
   * 监听任务, 且该任务只能触发一次
   * @param ev
   * @param excute
   * @returns {EventBus} 当前实例
   */
  public once(ev: string, excute: IFn): EventBus {
    const onceFn = (...res: any[]) => {
      excute(...res)
      this.off(ev)
    }
    return this.on(ev, onceFn)
    // this.on(ev, (...res)=> excute(...res))
  }

  /**
   *  触发任务
   * @param {string} ev
   * @param {NormalObject} res
   */
  public emit(ev: string, params?: NormalObject<any>): void {
    if (!Object.prototype.hasOwnProperty.call(this.events, ev)) {
      throw new Error(`event ${ev} does not exist in eventbus`)
    }

    const fn = this.events[ev]

    if (typeof fn !== 'function') {
      throw new Error(`event ${ev} is not a function`)
    }

    fn(params)
  }

  /**
   *  卸载任务
   * @param {string} ev
   * @returns {EventBus} 当前实例
   */
  public off(ev: string): EventBus {
    if (!Object.prototype.hasOwnProperty.call(this.events, ev)) {
      throw new Error(`event ${ev} does not exist in eventbus`)
    }
    delete this.events[ev]
    return this
  }

  /**
   *  卸载所有任务
   * @returns {EventBus} 当前实例
   */
  public removeAll(): EventBus {
    this.events = {}
    return this
  }
}

export default EventBus.getInstance()
