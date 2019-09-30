import {expectType} from 'tsd';
import {Container} from 'unstated';
import UNSTATED from '.';

expectType<boolean>(UNSTATED.isEnabled);
expectType<boolean>(UNSTATED.logStateChanges);

expectType<{
	[containerName: string]: Container<{[stateName: string]: unknown}>;
}>(UNSTATED.containers);

expectType<() => void>(UNSTATED.logState);
expectType<void>(UNSTATED.logState());

expectType<{[containerName: string]: {[stateName: string]: unknown }}>(
	UNSTATED.states
);
