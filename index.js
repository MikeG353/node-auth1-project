const server = require('./api/server')

require('dontenv').config()

const server = require('')

const port = process.env.PORT || 5000
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));