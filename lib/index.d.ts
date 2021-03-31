interface NormalObject<T> {
    [key: string]: T;
}
declare type IFn = (params?: NormalObject<any>) => unknown;
/**
 *  EventBus 事件总线
 */
declare class EventBus {
    private static intance;
    private events;
    private max;
    private counts;
    private constructor();
    /**
     *  获取唯一实例
     * @returns {EventBus}
     */
    static getInstance(): EventBus;
    /**
     *  监听任务
     * @param ev
     * @param excute
     * @returns {EventBus} 当前实例
     */
    on(ev: string, excute: IFn): EventBus;
    /**
     * 监听任务, 且该任务只能触发一次
     * @param ev
     * @param excute
     * @returns {EventBus} 当前实例
     */
    once(ev: string, excute: IFn): EventBus;
    /**
     *  触发任务
     * @param {string} ev
     * @param {NormalObject} res
     */
    emit(ev: string, params?: NormalObject<any>): void;
    /**
     *  卸载任务
     * @param {string} ev
     * @returns {EventBus} 当前实例
     */
    off(ev: string): EventBus;
    /**
     *  卸载所有任务
     * @returns {EventBus} 当前实例
     */
    removeAll(): EventBus;
}
declare const _default: EventBus;
export default _default;
