module.exports = function (RED) {
	function videohub(config) {
		RED.nodes.createNode(this, config);
		var node = this;


		var Router = require('io-videohub');
		this.router = new Router({host: config.ip, port: '9990'});
		
		this.router.on('update', function(callback) {
			var msg = { payload: callback };
			node.send(msg);
		});
		
	 	this.on('input', function(msg) {
			this.router.route(msg.payload.split[0], msg.payload.split[1]);
			
			
			
			
			
			
			
			
		});
		this.on('close', function () {

		});

	}
	RED.nodes.registerType("videohub", videohub);
}