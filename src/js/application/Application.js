/* global APPLICATION_VERSION */

import ApplicationConfiguration from './ApplicationConfiguration';
import ApplicationLogger from './ApplicationLogger';

export default class Application {
	// _________________________________________________________________________

	constructor(creationParameters) {
		// Order Important

		// Initialise Configuration
		ApplicationConfiguration.initialise(creationParameters);

		// Always Log Version
		ApplicationLogger.log(`Application ${APPLICATION_VERSION}`);

		// Initialise Logger to Configuration
		ApplicationLogger.initialise();
	}
}
