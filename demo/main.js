require('openmusic-oscilloscope').register('openmusic-oscilloscope');

var ac = new AudioContext();
var limiter = ac.createGain();
limiter.gain.value = 0.25;
limiter.connect(ac.destination);

var analyser = ac.createAnalyser();
analyser.connect(limiter);

var oscilloscope = document.querySelector('openmusic-oscilloscope');
oscilloscope.attachTo(analyser);

var Theremin = require('../');
var thereminNode = Theremin(ac);
thereminNode.connect(analyser);
thereminNode.start();

