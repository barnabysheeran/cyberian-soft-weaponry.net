/* global APPLICATION_VERSION */

import ApplicationConfiguration from './ApplicationConfiguration';
import ApplicationLogger from './ApplicationLogger';

import Controller from '../controller/Controller';

export default class Application {
	#CONTROLLER;

	#applicationRunTimeMS = 0;

	// _________________________________________________________________________

	constructor(creationParameters) {
		// Order Important

		// Initialise Configuration
		ApplicationConfiguration.initialise(creationParameters);

		// Always Log Version
		ApplicationLogger.log(`Application ${APPLICATION_VERSION}`);

		// Initialise Logger to Configuration
		ApplicationLogger.initialise();

		// Create Controller
		this.#CONTROLLER = new Controller();

		// Start Main Loop
		window.requestAnimationFrame(this.#tick.bind(this));
	}

	// _______________________________________________________________ Main Loop

	#tick(applicationRunTimeMS) {
		// Calculate Application Frame Delta MS
		const FRAME_DELTA_MS = applicationRunTimeMS - this.#applicationRunTimeMS;

		// Store Application Run Time
		this.#applicationRunTimeMS = applicationRunTimeMS;

		// Update Controller
		this.#CONTROLLER.tick(FRAME_DELTA_MS);

		// Loop
		window.requestAnimationFrame(this.#tick.bind(this));
	}
}
