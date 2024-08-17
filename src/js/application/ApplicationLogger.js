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

	static log(message, logLevel = 0) {
		// Enabled ?
		if (this.#isEnabled === false) {
			return;
		}

		let outputMessage = message;

		// Log Level
		for (let i = 0; i < logLevel; i += 1) {
			outputMessage = ` ${outputMessage}`;
		}

		/* eslint-disable-next-line no-console */
		console.log(`\x1b[90m${outputMessage}\x1b[0m`);
	}
}
