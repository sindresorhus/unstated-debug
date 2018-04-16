import test from 'ava';
import {Container} from 'unstated';
import m from '.';

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
	t.is(m, window.UNSTATED);
	t.is(typeof window.UNSTATED, 'object');
	t.true(window.UNSTATED.containers.FixtureContainer.state.foo);
});
