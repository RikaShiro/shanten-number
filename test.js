const { Player, Self } = require('./Game.js')
const a = new Player()
console.log(a instanceof Player, a instanceof Self)
const b = new Self()
console.log(b instanceof Player, b instanceof Self)