import ApplicationLogger from '../../../../application/ApplicationLogger';

import DirectableRhythm from '../DirectableRhythm';

export default class DirectableRhythmBPM extends DirectableRhythm {
	// _________________________________________________________________________

	constructor() {
		super();

		ApplicationLogger.log('DirectableRhythmBPM', this.LOG_LEVEL);
	}
}
