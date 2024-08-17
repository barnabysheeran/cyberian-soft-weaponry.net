// Import CSS
import '../css/index.css';

// Application
import Application from './application/Application';

// ______________________________________________________________________ Create

/* eslint-disable-next-line import/prefer-default-export */
export function create(creationParameters) {
	return new Application(creationParameters);
}
