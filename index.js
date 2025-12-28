const Hapi = require('@hapi/hapi');
const routes = require('./routes/v1.js')

require('dotenv').config();

const PORT = process.env.PORT;
const HOST = process.env.HOST;

const server = Hapi.server({
    port: PORT,
    host: HOST,
    routes: {
        cors: {
            origin: ['*']
        }
    },
})
server.route(routes);
server.start();


console.log(`Server running on ${server.info.uri}`);