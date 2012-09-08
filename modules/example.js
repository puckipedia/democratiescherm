function clientCode() {
	return {
		init:function() {
			alert("TestCode init!")
		},
		submit:function(a) {
			alert("click!"+$(a).attr("id"));
		},
		render:function(a) {
			$(a).html("hallo!<button id='hoi'>a</button><button id='hi'>b</button>");
		}
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
exports.serverCode = serverCode;
exports.clientCode = clientCode;