var setterGetterify = require('setter-getterify');
var Oscillator = require('openmusic-oscillator');
var DCBias = require('openmusic-dcbias');

module.exports = function(context) {
	
	var node = context.createGain();
	var oscillator = Oscillator(context);
	oscillator.connect(node);

	var frequency = DCBias(context);
	frequency.connect(oscillator.frequency);

	/*var nodeProperties = {
		frequency: 440.0
	};

	setterGetterify(node, nodeProperties, {
		afterSetting: function(property, value) {
			console.log(property, 'was set', value);
		}
	});*/

	// Aliasing because it's weird to write theremin.frequency.gain.value
	// instead of theremin.frequency.value, or theremin.frequency.setValueAtTime... etc
	node.frequency = frequency.gain;

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

