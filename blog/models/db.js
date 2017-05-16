var dbconfig = require('../conf/dbconfig').mongodb;
var Db = require('mongodb').Db;
var Server = require('mongodb').Server;

module.exports = new Db(dbconfig.db, new Server(dbconfig.host, dbconfig.DEFAULT_PORT, {}));
