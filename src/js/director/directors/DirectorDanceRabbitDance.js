import ApplicationLogger from '../../application/ApplicationLogger';

import Director from '../Director';

import DirectableTitle from '../../directable/directables/title/DirectableTitle';
import DirectableRhythmBPM from '../../directable/directables/rhythm/bpm/DirectableRhythmBPM';

export default class DirectorDanceRabbitDance extends Director {
	#DIRECTABLE_HEADER;
	#DIRECTABLE_RHYTHM_BPM;

	// _________________________________________________________________________

	constructor() {
		super();

		ApplicationLogger.log('DirectorDanceRabbitDance', this.LOG_LEVEL);

		// Create Required Directables
		this.#DIRECTABLE_HEADER = new DirectableTitle();
		this.#DIRECTABLE_RHYTHM_BPM = new DirectableRhythmBPM();

		// Set Initial Title
		this.#DIRECTABLE_HEADER.setText('꒰ ঌᐢ.ˬ.ᐢ໒ ꒱');
	}

	// ____________________________________________________________________ Tick

	tick(frameDeltaMS) {
		// Tick DirectorDanceRabbitDance

		this.#DIRECTABLE_RHYTHM_BPM.tick(frameDeltaMS);
	}
}
