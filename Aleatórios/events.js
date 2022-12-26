const {EventEmitter} = require('events')

const emitter = new EventEmitter()

// emitter.on('Ok', (message) => {
//     console.log('Ouvi você', message)
// })

emitter.once('Ok', (message) => {
    console.log('Ouvi você', message)
})
emitter.emit('Ok', 'oi')
emitter.emit('Ok', 'oi')
emitter.emit('Ok', 'oi')

