var express = require('express');
var app = express();

var mongoose = require('mongoose');
var opts = {
    server: {
       socketOptions: { keepAlive: 1 }
    }
};

app.set('env', 'production');

switch(app.get('env')){
    case 'development':
        mongoose.connect(credentials.mongo.development.connectionString, opts);
        break;
    case 'production':
        mongoose.connect(credentials.mongo.production.connectionString, opts);
        break;
    default:
        throw new Error('Unknown execution environment: ' + app.get('env'));
}
