function md5_crypt(e,d){"undefined"!=typeof VarType&&(e=VarType.toStr(e),d=VarType.toStr(d));var i=b64pad;b64pad="";var j=chrsz;chrsz=8;"$1$"==d.substr(0,3)&&(d=d.substr(3));var b=d.indexOf("$");if(0>b||8<b)b=8;for(var d=d.substr(0,b),a=e+"$1$"+d,c=str_md5(e+d+e),b=e.length;0<b;b-=16)a=16<=b?a+c:a+c.substr(0,b);for(b=e.length;0!=b;b>>=1)a=0!=(b&1)?a+String.fromCharCode(0):a+e.charAt(0);for(var f="$1$"+d+"$",c=str_md5(a),b=0;1E3>b;b++)a="",a=0!=(b&1)?a+e:a+c,0!=b%3&&(a+=d),0!=b%7&&(a+=e),a=0!=(b&1)?
a+c:a+e,c=str_md5(a);c+=c.charAt(5);for(b=0;5>b;b++){var a=c.charCodeAt(b)<<16|c.charCodeAt(b+6)<<8|c.charCodeAt(b+12),g=4;"undefined"!=typeof VarType&&(a=VarType.toUInt(a),g=VarType.toUInt(g));for(var h="";0<=--g;)h+="./0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".charAt(a&63),a>>=6;f+=h}a=c.charCodeAt(11);b=f;c=a;f=2;"undefined"!=typeof VarType&&(c=VarType.toUInt(c),f=VarType.toUInt(f));for(a="";0<=--f;)a+="./0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".charAt(c&
63),c>>=6;b64pad=i;chrsz=j;return b+a};
function clientCode() {
	return {
		init:function() {
		},
		submit:function(module) {
			module.login($("#login_name", module.base),module.md5_crypt($("#login_pass", module.base)));
		},
		render:function(a) {
			$(a).html("<input type='text' name='username' id='login_name'/>");
		},
		md5_crypt: md5_crypt
		//client (global) is this object being returned
	}
}
function serverCode() {
	return {
		send: function() {
			return clientCode();
		},
		login: function(user,pass) {
			return pass === md5_crypt(user)
		},
		type: "login"
	}
}
exports.serverCode = serverCode;
exports.clientCode = clientCode;