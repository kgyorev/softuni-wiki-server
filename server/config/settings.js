const path = require('path')
let rootPath = path.normalize(path.join(__dirname, '/../../'))
let port = process.env.PORT || 1337
module.exports = {development: {rootPath: rootPath,
    //db: 'mongodb://localhost:27017/softuni-wiki',port: port
   db: 'mongodb://admin:apolo13A@ds131601.mlab.com:31601/softuni-wiki'
  },
  production: {}
}
// index.js
// const env = process.env.NODE_ENV || 'development'
// const settings = require('./server/config/settings')[env]
