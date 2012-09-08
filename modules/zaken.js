function clientCode() {
	return {
		init:function() {
		},
		render:function(a) {
			return '<h2>zaken</h2>				<ul class="nav nav-list">					<li><a href="">zaak</a>					</li>					<li><a href="">zaak</a>					</li>					<li><a href="">zaak</a>					</li>					<li><a href="">zaak</a>					</li>				</ul>			';

		},
		type: "widget",
		name: "zaken",
		width:4,
		//client (global) is this object being returned
	}
}
function serverCode() {
	return {
		send: function() {
			return clientCode();
		},
		type: "zaken"
	}
}
exports.serverCode = serverCode();
exports.clientCode = clientCode;