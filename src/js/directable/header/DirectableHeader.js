import ApplicationLogger from '../../application-logger/ApplicationLogger';
import Directable from '../Directable';

export default class DirectableHeader extends Directable {
	// _________________________________________________________________________

	constructor() {
		super();

		ApplicationLogger.log('DirectableHeader', this.LOG_LEVEL);
	}

	// _________________________________________________________ Set Header Text

	/* eslint-disable class-methods-use-this */
	setHeaderText(text) {
		document.title = text;
	}
}
