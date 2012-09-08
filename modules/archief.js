function clientCode() {
	return {
		init:function() {
		},
		render:function(a) {
			return '<h2>archief</h2>				<ul class="nav nav-list">					<li><a href="">archiefitem</a>					</li>					<li><a href="">archiefitem</a>					</li>					<li><a href="">archiefitem</a>					</li>					<li><a href="">archiefitem</a>					</li>				</ul>			';

		},
		type: "widget",
		name: "archief",
		width:4,
		//client (global) is this object being returned
	}
}
function serverCode() {
	return {
		send: function() {
			return clientCode();
		},
		type: "archief"
	}
}
exports.serverCode = serverCode();
exports.clientCode = clientCode;