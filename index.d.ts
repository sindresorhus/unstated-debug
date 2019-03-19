import { Container } from "unstated";

declare const UNSTATED: {
	/**
	An object containing the project's containers.
	*/
	containers: {
		[containerName: string]: Container<{ [stateName: string]: unknown }>;
	};

	/**
	Whether the debugger should be enabled or not.
	*/
	isEnabled: boolean;

	/**
	Function that logs out the current state.
	*/
	logState: () => void;

	/**
	Boolean value that represents whether state changes should be logged to the
	console.
	*/
	logStateChanges: boolean;

	/**
	An object containing all of the state values.
	*/
	states: {
		[containerName: string]: { [stateName: string]: unknown };
	};
};

export default UNSTATED;
