import ApplicationLogger from '../../../../application/ApplicationLogger';

import DirectableRhythm from '../DirectableRhythm';

export default class DirectableRhythmASDR extends DirectableRhythm {
	// _________________________________________________________________________

	constructor() {
		super();

		ApplicationLogger.log('DirectableRhythmASDR', this.LOG_LEVEL);
	}
}
