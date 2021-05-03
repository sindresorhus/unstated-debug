import {Container} from 'unstated';

/**
When enabled, it exposes a global object `UNSTATED` which you can use in DevTools to explore the containers and their state.

In the root of your app, import `unstated-debug`:

@example
```
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'unstated';
import UNSTATED from 'unstated-debug';
import App from './components/App.js';

UNSTATED.logStateChanges = false;

render(
	<Provider>
		<App/>
	</Provider>,
	document.querySelector('#root')
);
```
*/
declare const UNSTATED: {
	/**
	Whether the debugger should be enabled or not.

	@default true
	*/
	isEnabled: boolean;

	/**
	Whether state changes should be logged to the console.

	@default true
	*/
	logStateChanges: boolean;

	/**
	Whether logs should be collapsed.

	@default false
	*/
	isCollapsed: boolean;

	/**
	Your containers.
	*/
	containers: Record<string, Container<Record<string, unknown>>>;

	/**
	All of the state values.
	*/
	states: Record<string, Record<string, unknown>>;

	/**
	Logs the current state of your containers.
	*/
	logState: () => void;
};

export default UNSTATED;
