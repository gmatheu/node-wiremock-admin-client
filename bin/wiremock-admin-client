#!/usr/bin/env node
const program = require('commander').program;
// mcd-order
program
  .command('shutdown', 'Shutdown WireMock server')
  .description('Wiremock admin client')
  .argument('[host]', 'Wiremock host', 'localhost')
  .argument('[port]', "Woremock port", '3001')
program.action(() => {
    program.help()
})
program.parse(process.argv)