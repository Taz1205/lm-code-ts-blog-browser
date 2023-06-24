import { StateType , states } from "./states";

export class State {

	//#state = states.MENU;
	public state: StateType = "MENU";

	get(): StateType  {
		return this.state;
	}

	set(newState: StateType ) {
		this.state = newState;
	}
}
