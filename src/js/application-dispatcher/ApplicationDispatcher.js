export default class ApplicationDispatcher {
	static #EVENTS = {};

	// _________________________________________________________________________

	static on(eventType, eventListener) {
		if (this.#EVENTS[eventType] === undefined) {
			this.#EVENTS[eventType] = [];
		}

		this.#EVENTS[eventType].push(eventListener);
	}

	// _________________________________________________________________________

	static dispatch(eventType, event, eventDate) {
		if (this.#EVENTS[eventType] !== undefined) {
			this.#EVENTS[eventType].forEach((eventListener) => {
				eventListener(event, eventDate);
			});
		}
	}

	// _________________________________________________________________________

	static removeEventListener(eventType, eventListener) {
		if (this.#EVENTS[eventType] !== undefined) {
			const index = this.#EVENTS[eventType].indexOf(eventListener);
			if (index > -1) {
				this.#EVENTS[eventType].splice(index, 1);
			}
		}
	}
}
