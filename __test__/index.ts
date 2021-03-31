import EventBus from '../lib/index'

EventBus.on('sayhello', () => {
  console.log('hello')
})

EventBus.emit('sayhello', {})
