import ApplicationConfiguration from './ApplicationConfiguration';

export default class ApplicationLogger {
	static #isEnabled = true;

	// _________________________________________________________________________

	static initialise() {
		// Is Debug Is Development ?
		if (
			ApplicationConfiguration.getIsDebug() === true ||
			ApplicationConfiguration.getIsDevelopment() === true
		) {
			this.#isEnabled = true;
		} else {
			this.#isEnabled = false;
		}
	}

	// _____________________________________________________________________ Log

	static log(message) {
		// Enabled ?
		if (this.#isEnabled === false) {
			return;
		}

		/* eslint-disable-next-line no-console */
		console.log(`\x1b[90m${message}\x1b[0m`);
	}
}
