import {detailedDiff} from 'deep-object-diff';
import {__SUPER_SECRET_CONTAINER_DEBUG_HOOK__} from 'unstated';

const UNSTATED = {
	isEnabled: true,
	isCollapsed: false,
	logStateChanges: true,
	containers: {},
	get states() {
		return Object.fromEntries(
			Object.entries(this.containers).map(([key, value]) => [key, value.state])
		);
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

	let previousState = container.state;

	container.subscribe(() => {
		if (!(UNSTATED.isEnabled && UNSTATED.logStateChanges)) {
			return;
		}

		const {state} = container;
		const diff = detailedDiff(previousState, state);

		const group = UNSTATED.isCollapsed ? console.groupCollapsed : console.group;
		group(name);

		const hasChanges = object => Object.keys(object).length > 0;

		if (hasChanges(diff.added)) {
			console.log('Added\n', diff.added);
		}

		if (hasChanges(diff.updated)) {
			console.log('Updated\n', diff.updated);
		}

		if (hasChanges(diff.deleted)) {
			console.log('Deleted\n', diff.deleted);
		}

		console.log('New state\n', state);
		console.log('Old state\n', previousState);

		console.groupEnd(name);

		previousState = state;
	});
});

if (typeof window !== 'undefined') {
	window.UNSTATED = UNSTATED;
}

export default UNSTATED;
