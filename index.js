'use strict';
const {detailedDiff} = require('deep-object-diff');

module.exports = options => {
	options = {
		isEnabled: true,
		logStateChanges: true,
		...options
	};

	return Container => {
		if (!options.isEnabled) {
			return Container;
		}

		if (!window.UNSTATED) {
			window.UNSTATED = {
				isEnabled: true,
				logStateChanges: options.logStateChanges,
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
		}

		const globalInstance = window.UNSTATED;
		const logStateChangeKey = Symbol('log state key');

		class DebuggableContainer extends Container {
			[logStateChangeKey](state) {
				const {name} = this.constructor;
				const diff = detailedDiff(this.state, state);

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
				console.log('Old state\n', this.state);

				console.groupEnd(name);
			}

			constructor(...args) {
				super(...args);
				globalInstance.containers[this.constructor.name] = this;
			}

			setState(state) {
				if (globalInstance.isEnabled && globalInstance.logStateChanges) {
					this[logStateChangeKey](state);
				}

				super.setState(state);
			}
		}

		return DebuggableContainer;
	};
};
