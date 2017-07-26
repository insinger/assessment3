'use strict';
var fs=require("fs");

function main() {
	write_immed("Running in *PRODUCTION* mode");
   var cfg= {
		HOSTNAME:       must_get_env("CONFIG_"+"HOSTNAME"),
		PORT:           must_get_env("CONFIG_"+"PORT"),
		SECRET:			must_get_env("CONFIG_"+"SECRET"),
		DATABASE_NAME:  must_get_env("CONFIG_"+"DATABASE_NAME"),
		MYSQL_USERNAME: must_get_env("CONFIG_"+"MYSQL_USERNAME"),
		MYSQL_PASSWORD: must_get_env("CONFIG_"+"MYSQL_PASSWORD"),
		MYSQL_HOSTNAME: must_get_env("CONFIG_"+"MYSQL_HOSTNAME"),
		MYSQL_PORT:     must_get_env("CONFIG_"+"MYSQL_PORT"),
		MYSQL_LOGGING: console.log,

		version: '1.0.0',
	};
	return cfg;
}

function write_immed(...args) {
	// ensures message is written before program is terminated by process.exit()
	for (var x of args) {
		fs.writeSync(1,x+"\n"); // stdout
		fs.writeSync(2,x+"\n"); // stderr
	}
	return 1;
}


function must_get_env(key) {
	var val=process.env[key];
	if (!val) {
		var msg="Aborting startup due to missing environment variable '"+key+"'";
		write_immed(msg);
		process.exit(1);
	}
	return val;
}


// start

module.exports = main();

