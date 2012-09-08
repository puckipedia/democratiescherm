md5 = require('./../md5.js');
function clientCode() {
	return {
		init:function() {
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