import ApplicationLogger from '../../application-logger/ApplicationLogger';

import Director from '../Director';

import DirectableHeader from '../../directables/header/DirectableHeader';
import DirectableRhythm from '../../directables/rhythm/DirectableRhythm';

export default class DirectorDanceRabbitDance extends Director {
	#DIRECTABLE_HEADER;
	#DIRECTABLE_RHYTHM;

	// _________________________________________________________________________

	constructor() {
		super();

		ApplicationLogger.log('DirectorDanceRabbitDance', this.LOG_LEVEL);

		// Create Required Directables
		this.#DIRECTABLE_HEADER = new DirectableHeader();
		this.#DIRECTABLE_RHYTHM = new DirectableRhythm();
	}

	// ____________________________________________________________________ Tick

	tick(frameDeltaMS) {
		// Tick DirectorDanceRabbitDance
	}
}
