require('openmusic-oscilloscope').register('openmusic-oscilloscope');

var ac = new AudioContext();
var masterVolume = ac.createGain();
masterVolume.gain.value = 0.05;
masterVolume.connect(ac.destination);

var limiter = ac.createDynamicsCompressor();
limiter.connect(masterVolume);

var analyser = ac.createAnalyser();
analyser.connect(limiter);

var oscilloscope = document.querySelector('openmusic-oscilloscope');
oscilloscope.attachTo(analyser);

var Theremin = require('../');
var thereminNode = Theremin(ac);
thereminNode.connect(analyser);
thereminNode.start();

// Shows how to access the theremin's input attributes (frequency)
setInterval(function() {
	thereminNode.frequency.setValueAtTime(440 +  220 * Math.random(), 0);
}, 200);
