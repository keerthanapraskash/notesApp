// this is index.js
const yargs = require('yargs')
//yargs.version('1.1.0')
yargs.command({
command: 'add',
describe: 'Add a new note',
handler: function () {
console.log('Adding a new note!')
}
})

console.log(yargs.argv)