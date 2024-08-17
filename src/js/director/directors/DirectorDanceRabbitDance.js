import ApplicationLogger from '../../application/ApplicationLogger';

import Director from '../Director';

import DirectableTitle from '../../directable/directables/title/DirectableTitle';
import DirectableRhythm from '../../directable/directables/rhythm/DirectableRhythm';

export default class DirectorDanceRabbitDance extends Director {
	#DIRECTABLE_HEADER;
	#DIRECTABLE_RHYTHM;

	// _________________________________________________________________________

	constructor() {
		super();

		ApplicationLogger.log('DirectorDanceRabbitDance', this.LOG_LEVEL);

		// Create Required Directables
		this.#DIRECTABLE_HEADER = new DirectableTitle();
		this.#DIRECTABLE_RHYTHM = new DirectableRhythm();

		// Set Initial Title
		this.#DIRECTABLE_HEADER.setText(' ꒰ ঌᐢ.ˬ.ᐢ໒ ꒱');
	}

	// ____________________________________________________________________ Tick

	tick(frameDeltaMS) {
		// Tick DirectorDanceRabbitDance
	}
}
