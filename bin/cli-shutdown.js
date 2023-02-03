#!/usr/bin/env node
const { program } = require('commander').program;
const axios = require('axios');

program
  .argument('[host]', 'WireMock host', 'localhost')
  .argument('[port]', "WoreMock port", '3001')
  .action((host, port) => {
    console.log(`Shutting down Wiremock on ${host}:${port}`);
    axios
      .post(`http://${host}:${port}/__admin/shutdown`)
      .then(() => {
          console.log('Shutdown command sent.')
      })
      .catch(() => {
          console.log('Could not shutdown. Is it running?')
      });
  })
program.parse(process.argv)