const { writeFileSync, readFileSync } = require('node:fs')

// const st = new Set([1n, 2n, 3n, 1n, 1n, 1n])
// const A = BigUint64Array.from(st)
// console.log(A)
// writeFileSync('./abc', A)
// let x = readFileSync('./abc')
// x = new BigUint64Array(x)
// console.log(x)

const st = new Set([1, 2, 3, 4, 1, 1, 1])
let A = Uint32Array.from(st)
console.log(A)
writeFileSync('./abc', Buffer.from(A))
let x = readFileSync('./abc')
x = new Uint32Array(x)
console.log(x)