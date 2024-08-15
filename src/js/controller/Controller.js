import Director from '../director/Director';

export default class Controller {
	#DIRECTOR;

	// _________________________________________________________________________

	constructor() {
		// Create Director
		this.#DIRECTOR = new Director();
	}

	// ____________________________________________________________________ Tick

	tick(frameDeltaMS) {
		// Tick Director
		this.#DIRECTOR.tick(frameDeltaMS);
	}
}
