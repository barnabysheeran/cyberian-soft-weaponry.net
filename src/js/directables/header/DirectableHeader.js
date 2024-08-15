import Directable from '../Directable';

export default class DirectableHeader extends Directable {
	// _________________________________________________________________________

	constructor() {
		super();
	}

	// _________________________________________________________ Set Header Text

	/* eslint-disable class-methods-use-this */
	setHeaderText(text) {
		document.title = text;
	}
}
