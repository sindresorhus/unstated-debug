import { expectType } from "tsd-check";
import UNSTATED from "./index";
import { Container } from "unstated";

expectType<boolean>(UNSTATED.isEnabled);
expectType<boolean>(UNSTATED.logStateChanges);

expectType<{
	[containerName: string]: Container<{ [stateName: string]: unknown }>;
}>(UNSTATED.containers);

expectType<() => void>(UNSTATED.logState);
expectType<void>(UNSTATED.logState());

expectType<{ [containerName: string]: { [stateName: string]: unknown } }>(
	UNSTATED.states
);
