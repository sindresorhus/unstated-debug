import test from 'ava';
import {Container} from 'unstated';
import UNSTATED from './index.js';

class FixtureContainer extends Container {
	constructor() {
		super();

		this.state = {
			foo: true
		};
	}
}

const container = new FixtureContainer();

test('main', t => {
	t.true(container.state.foo);
});

test('exposes window global', t => {
	t.is(UNSTATED, window.UNSTATED);
	t.is(typeof window.UNSTATED, 'object');
	t.true(window.UNSTATED.containers.FixtureContainer.state.foo);
});
