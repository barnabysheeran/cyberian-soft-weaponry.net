import ApplicationLogger from '../../application-logger/ApplicationLogger';
import Directable from '../Directable';

export default class DirectableRhythm extends Directable {
	// __________________________________________________________________________

	constructor() {
		super();

		ApplicationLogger.log('DirectableRhythm', this.LOG_LEVEL);
	}
}
