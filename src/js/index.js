// Import CSS
import '../css/index.css';

// Import Favicon
import '../asset/ico/favicon.ico';

// Application
import Application from './application/Application';

// ______________________________________________________________________ Create

/* eslint-disable-next-line import/prefer-default-export */
export function create(creationParameters) {
	return new Application(creationParameters);
}
