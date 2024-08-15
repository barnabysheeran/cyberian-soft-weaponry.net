import DirectableHeader from '../../directables/header/DirectableHeader';
import DirectableRhythm from '../../directables/rhythm/DirectableRhythm';

export default class DirectorDanceRabbitDance {
	#DIRECTABLE_HEADER;
	#DIRECTABLE_RHYTHM;

	// _________________________________________________________________________

	constructor() {
		// Create Required Directables
		this.#DIRECTABLE_HEADER = new DirectableHeader();
		this.#DIRECTABLE_RHYTHM = new DirectableRhythm();
	}

	// ____________________________________________________________________ Tick

	tick(frameDeltaMS) {
		// Tick DirectorDanceRabbitDance
	}
}
