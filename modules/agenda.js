function clientCode() {
	return {
		init:function() {
		},
		render:function(a) {
			return '<a href="" title="zoek agendapunten"><i class="icon icon-search pull-right"></i></a>				<h2>agenda</h2>				<ul class="nav nav-list">					<li><a href="">agendapunt</a>					</li>					<li><a href="">agendapunt</a>					</li>					<li><a href="">agendapunt</a>					</li>					<li><a href="">agendapunt</a>					</li>				</ul>';
		},
		type: "widget",
		name: "agenda",
		width:4,
		//client (global) is this object being returned
	}
}
function serverCode() {
	return {
		send: function() {
			return clientCode();
		},
		type: "agenda"
	}
}
exports.serverCode = serverCode();
exports.clientCode = clientCode;