md5 = require('./../md5.js');
function clientCode() {
	return {
		init:function() {
		},
		submit:function(module) {
			module._.login($("#login_name", module.base),module.md5_crypt($("#login_pass", module.base)));
		},
		render:function(a) {
			$(a).html('<input type="text" id="login_name" name="username"/><input type="password" id="login_pass" name="password"/>');
		},
		type: "client",
		name: "login",
		md5_crypt: function(a) {return md5(a);}
		//client (global) is this object being returned
	}
}
function serverCode() {
	return {
		send: function() {
			return clientCode();
		},
		login: function(user,pass) {
			if(pass === md5.md5(user)) {
				return md5.md5(user+pass);
			}
			return false
		},
		type: "login"
	}
}
exports.serverCode = serverCode();
exports.clientCode = clientCode;