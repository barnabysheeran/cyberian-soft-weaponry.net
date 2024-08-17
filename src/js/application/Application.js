/* global APPLICATION_VERSION */

import ApplicationConfiguration from './ApplicationConfiguration';
import ApplicationLogger from './ApplicationLogger';

import Controller from '../controller/Controller';

export default class Application {
	#CONTROLLER;

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

	#tick(frameDeltaMS) {
		// Update Controller
		this.#CONTROLLER.tick(frameDeltaMS);

		// Loop
		window.requestAnimationFrame(this.#tick.bind(this));
	}
}
