import test from 'ava';
import browserEnv from 'browser-env';
import {Container} from 'unstated';
import m from '.';

browserEnv();

class FixtureContainer extends m()(Container) {
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
	t.is(typeof window.UNSTATED, 'object');
	t.true(window.UNSTATED.containers.FixtureContainer.state.foo);
});
