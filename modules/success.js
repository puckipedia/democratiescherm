md5 = require('./../md5.js');
function clientCode() {
	return {
		init:function() {
			module._.load("agenda.js");
			module._.load("stemmen.js");
			module._.load("streams.js");
			module._.load("zaken.js");
			module._.load("archief.js");
		},
		render:function(a) {
			return '<b>Success!</b>';
		},
		type: "client",
		name: "success",
		width:12,
		//client (global) is this object being returned
	}
}
function serverCode() {
	return {
		send: function() {
			return clientCode();
		},
		type: "client"
	}
}
exports.serverCode = serverCode();
exports.clientCode = clientCode;