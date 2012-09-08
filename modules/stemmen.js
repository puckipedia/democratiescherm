function clientCode() {
	return {
		init:function() {
		},
		render:function(a) {
			return '<h2>stemmen</h2>				<ul class="nav nav-list">					<li><a href="">stemming</a>					</li>					<li><a href="">stemming</a>					</li>					<li><a href="">stemming</a>					</li>					<li><a href="">stemming</a>					</li>				</ul>			';

		},
		type: "widget",
		name: "stemmen",
		width:4,
		//client (global) is this object being returned
	}
}
function serverCode() {
	return {
		send: function() {
			return clientCode();
		},
		type: "stemmen"
	}
}
exports.serverCode = serverCode();
exports.clientCode = clientCode;