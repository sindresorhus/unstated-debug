'use strict';
const {detailedDiff} = require('deep-object-diff');
const {__SUPER_SECRET_CONTAINER_DEBUG_HOOK__} = require('unstated');

const UNSTATED = {
	isEnabled: true,
	logStateChanges: true,
	containers: {},
	get states() {
		const ret = {};
		for (const [key, value] of Object.entries(this.containers)) {
			ret[key] = value.state;
		}
		return ret;
	},
	logState() {
		for (const [key, value] of Object.entries(this.containers)) {
			console.log(`%c${key}\n`, 'font-weight:bold', value.state);
		}
	}
};

__SUPER_SECRET_CONTAINER_DEBUG_HOOK__(container => {
	if (!UNSTATED.isEnabled) {
		return;
	}

	const {name} = container.constructor;

	UNSTATED.containers[name] = container;

	let prevState = container.state;

	container.subscribe(() => {
		if (!(UNSTATED.isEnabled && UNSTATED.logStateChanges)) {
			return;
		}

		const {state} = container;
		const diff = detailedDiff(prevState, state);

		console.group(name);

		if (diff.added) {
			console.log('Added\n', diff.added);
		}

		if (diff.updated) {
			console.log('Updated\n', diff.updated);
		}

		if (diff.deleted) {
			console.log('Deleted\n', diff.deleted);
		}

		console.log('New state\n', state);
		console.log('Old state\n', prevState);

		console.groupEnd(name);

		prevState = state;
	});
});

window.UNSTATED = UNSTATED;
module.exports = UNSTATED;
