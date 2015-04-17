# openmusic-theremin

> A theremin audio node

## Installing and building

### With NPM

[![Install with NPM](https://nodei.co/npm/openmusic-theremin.png?downloads=true&stars=true)](https://nodei.co/npm/openmusic-theremin/)

### From repository:

```bash
git clone https://github.com/openmusic/theremin.git
```

Then install build dependencies, etc with:

```bash
npm install
```

To build a bundle for the demo:

```bash
npm run build
```

Demo files will be placed in `build/`. Open `build/index.html` to access the demo.

Remember to rebuild the bundle each time you make a change to the demo or node code. Alternatively you can also run the `watch` task, so it will watch for file changes and then rebuild the bundle for you:

```bash
npm run watch
```

## Usage

Create an instance of the node by passing it an audio context:

```javascript
var Theremin = require('openmusic-theremin');
var audioContext = new AudioContext();
var thereminNode = Theremin(audioContext);
```

This node can be connected together like any other Web Audio node:

```javascript
var gainNode = audioContext.createGain();
thereminNode.connect(gainNode);
```

## Attributes

### `frequency` (AudioParam)

```javascript
theremin.frequency.value = 123;
theremin.frequency.setValueAtTime(440, 0);
```




