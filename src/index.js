const config = require('./config');
const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const kafkaClient = require('./kafka.js')
const consumers = require('./subscribers/kafka/consumer');

async function startServer() {
    const app = express(feathers());

    consumers({ kafkaClient, config });

    app.listen(config.port, () => {
        console.log(`
      ################################################
      🛡️  Server listening on port: ${config.port} 🛡️
      ################################################
    `);
    })
}

startServer();
