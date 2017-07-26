'use strict';

console.log("Running in AWS DEVELOPMENT mode");


 // Here username, password, etc are hard-coded for development env
 // *However* they are read from ENV variables for production.
 //
 // -> See config/production.js                                       


module.exports = {
  HOSTNAME: "",
  PORT: 3000,

  SECRET:'quip',

  DATABASE_NAME: 'quipdb',
  MYSQL_USERNAME: 'stackup',       
  MYSQL_PASSWORD: 'stackuppassword',       
  MYSQL_HOSTNAME: 'stackup.ch319nbbza7n.us-east-1.rds.amazonaws.com',  
  MYSQL_PORT: 3306,
  MYSQL_LOGGING: console.log,

  version: '1.0.0'
};