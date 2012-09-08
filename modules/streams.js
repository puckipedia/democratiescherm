function clientCode() {
	return {
		init:function() {
		},
		render:function(a) {
			return '<h2>streams</h2>				<br /><a class="btn" title="politiek24"					href="http://livestreams.omroep.nl/nos/politiek24-bb">					politiek24</a><br/> <a class="btn" title="Plenaire Zaal"					href="http://reflector.kpnstreaming.nl/?account=TweedeKamerL&file=Encoder01_Plenair_TK_Extern500k&type=live&service=windowsmedia&protocol=rtsp&port=&output=asx">Plenaire					Zaal</a><br/> <a class="btn" title="Thorbecke zaal"					href="http://reflector.kpnstreaming.nl/?user=TweedeKamerL&file=Encoder02_Thorbecke_Extern500k&type=live&service=windowsmedia&protocol=rtsp&port=&output=asx">Thorbecke					zaal</a><br/> <a class="btn" title="Groen van Prinstererzaal"					href="http://reflector.kpnstreaming.nl/?user=TweedeKamerL&file=Encoder03_GroenvPrinsterer_Extern500k&type=live&service=windowsmedia&protocol=rtsp&port=&output=asx">Groen					van Prinstererzaal</a><br/> <a class="btn" title="Troelstrazaal"					href="http://reflector.kpnstreaming.nl/?user=TweedeKamerL&file=Encoder04_Troelstra_Extern500k&type=live&service=windowsmedia&protocol=rtsp&port=&output=asx">Troelstrazaal</a>';
		},
		type: "widget",
		name: "streams",
		width:4,
		//client (global) is this object being returned
	}
}
function serverCode() {
	return {
		send: function() {
			return clientCode();
		},
		type: "streams"
	}
}
exports.serverCode = serverCode();
exports.clientCode = clientCode;