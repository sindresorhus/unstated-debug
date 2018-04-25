# unstated-debug [![Build Status](https://travis-ci.org/sindresorhus/unstated-debug.svg?branch=master)](https://travis-ci.org/sindresorhus/unstated-debug)

> Debug your [Unstated](https://github.com/jamiebuilds/unstated) containers with ease

<br>
<img src="screenshot.png" width="1145">


## Install

```
$ npm install unstated-debug
```


## Setup

In the root of your app, import `unstated-debug`:

```js
import React from 'react';
import {render} from 'react-dom';
import {Provide} from 'unstated';
import UNSTATED from 'unstated-debug';
import App from './components/App';

UNSTATED.logStateChanges = false;

render(
	<Provide>
		<App/>
	</Provide>,
	document.querySelector('#root')
);
```


## Usage

When enabled, it exposes a global object `UNSTATED` which you can use in DevTools to explore the containers and their state.

<img src="screenshot-explore.png" width="400">

The object contains the following properties:

- `isEnabled` - Same as the below option, but you can change it after init.
- `logStateChanges` - Same as the below option, but you can change it after init.
- `isCollapsed` - Collapse log by default.
- `containers` - Your containers.
- `states` - The state objects of your containers.
- `logState()` - Logs the current state of your containers.


## API

### UNSTATED

##### isEnabled

Type: `boolean`<br>
Default: `true`

Toggle debugging.

For example, if you use this in an Electron app, you could pass it [`is.development`](https://github.com/sindresorhus/electron-util#is) to ensure debugging is disabled in production.

##### logStateChanges

Type: `boolean`<br>
Default: `true`

Logs a diff for each state change to the containers. This gives you a live insight into state changes in your app.

<img src="screenshot-diff.png" width="400">


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
