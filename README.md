# easy-eventbus

Tiny eventbus lib for typescript

## `install`

<br/>

```
yarn add tiny-eventbus
```

## `use`

<br/>

```ts
import eventbus from 'tiny-eventbus'
eventbus.on('test', (params) => {
  console.log(params)
})

eventbus.emit('test', {
  value: 'hello',
})
```

## `api`

<br/>

`on` : subscribe an event

`once`: subscribe an event for once

`emit` : publish an event

`off`: unsubscribe an event

`removeAll`: remove add events
