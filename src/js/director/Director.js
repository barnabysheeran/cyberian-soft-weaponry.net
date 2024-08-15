import DirectorDanceRabbitDance from './directors/DirectorDanceRabbitDance';

export default class Director {
	#DIRECTORS = [];

	// _________________________________________________________________________

	constructor() {
		// Create Required Directors
		this.#DIRECTORS.push(new DirectorDanceRabbitDance());
	}

	// ____________________________________________________________________ Tick

	tick(frameDeltaMS) {
		// Tick Directors
		for(let i=0; i<this.#DIRECTORS.length; i++) {
			this.#DIRECTORS[i].tick(frameDeltaMS);
	}
}
