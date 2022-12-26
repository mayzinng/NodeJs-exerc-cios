const { inherits } = require('util')
const { EventEmitter } = require('events')



function Character(name) {
    this.name = name
}

inherits(Character, EventEmitter)

const ben = new Character('Ben');
ben.on('ben', () => console.log('Funcionou'))

console.log('Ben ok')
ben.emit('Estou aqui')