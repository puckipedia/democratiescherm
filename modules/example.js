function clientCode() {
	return {
		init:function() {
			alert("TestCode init!")
		}.toString(),
		submit:function(a) {
			alert("click!"+$(a).attr("id"));
		}.toString(),
		render:function(a) {
			alert('render');
			return "hallo!<button id='hoi'>a</button><button id='hi'>b</button>";
		}.toString(),
		type: "widget",
		name: "example_widget"
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