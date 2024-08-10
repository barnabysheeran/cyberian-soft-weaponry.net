export default class ApplicationConfiguration {
	// _________________________________________________________________________

	static initialise(creationParameters) {
		// Application Container - Required
		this.#APPLICATION_CONTAINER = creationParameters.applicationContainer;

		// Path Asset - Required
		this.#PATH_ASSET = creationParameters.pathAsset;

		// Is Debug ?
		if (creationParameters.isDebug !== undefined) {
			this.#IS_DEBUG = creationParameters.isDebug;
		}

		// Is Development ?
		if (creationParameters.isDevelopment !== undefined) {
			this.#IS_DEVELOPMENT = creationParameters.isDevelopment;
		}
	}

	// ___________________________________________________ Application Container

	static #APPLICATION_CONTAINER;

	static getApplicationContainer() {
		return this.#APPLICATION_CONTAINER;
	}

	// ______________________________________________________________ Path Asset

	static #PATH_ASSET;

	static getPathAsset() {
		return this.#PATH_ASSET;
	}

	// _________________________________________________ Is Debug Is Development

	static #IS_DEBUG = false;

	static #IS_DEVELOPMENT = false;

	static getIsDebug() {
		return this.#IS_DEBUG;
	}

	static getIsDevelopment() {
		return this.#IS_DEVELOPMENT;
	}
}
