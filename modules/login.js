md5 = require('./../md5.js');
function clientCode() {
	return {
		init:function() {
		},
		submit:function() {
			module._.login($("#login_name", module.base).val(),$("#login_pass", module.base).val());
		},
		render:function(a) {
			return '<input type="text" id="login_name" name="username"/><input type="password" id="login_pass" name="password"/><button onclick="module.submit()">Login</button>';
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
			console.log(md5.md5(user));
			console.log("'"+user+"'");
			console.log(pass);
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