var setterGetterify = require('setter-getterify');
var Oscillator = require('openmusic-oscillator');

module.exports = function(context) {
	
	var node = context.createGain();
	var oscillator = Oscillator(context);

	oscillator.connect(node);


	/*var nodeProperties = {
		propertyA: 'default value for A',
		propertyB: 0.123456,
		propertyC: 0x123456,
		propertyD: { 'also': 'objects are ok too' }
	};

	setterGetterify(node, nodeProperties);*/

	node.start = function(when, offset, duration) {
		
		console.log('start', 'when', when, 'offset', offset, 'duration', duration);

		when = when !== undefined ? when : 0;
		offset = offset !== undefined ? offset : 0;

		oscillator.start(when);
		
	};

	node.stop = function(when) {
	};

	node.cancelScheduledEvents = function(when) {
	};

	return node;

};
