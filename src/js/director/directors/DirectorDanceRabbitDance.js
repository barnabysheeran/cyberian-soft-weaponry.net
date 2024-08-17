import ApplicationLogger from '../../application-logger/ApplicationLogger';

import Director from '../Director';

import DirectableHeader from '../../directable/title/DirectableTitle';
import DirectableRhythm from '../../directable/rhythm/DirectableRhythm';

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

		// Set Initial Header
		this.#DIRECTABLE_HEADER.setText('꒰ ঌᐢ.ˬ.ᐢ໒ ꒱');
	}

	// ____________________________________________________________________ Tick

	tick(frameDeltaMS) {
		// Tick DirectorDanceRabbitDance
	}
}
