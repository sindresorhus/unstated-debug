import {expectType} from 'tsd';
import {Container} from 'unstated';
import UNSTATED from './index.js';

expectType<boolean>(UNSTATED.isEnabled);
expectType<boolean>(UNSTATED.logStateChanges);

expectType<Record<string, Container<Record<string, unknown>>>>(UNSTATED.containers);

expectType<() => void>(UNSTATED.logState);

expectType<Record<string, Record<string, unknown>>>(
	UNSTATED.states
);
