import ApplicationLogger from '../../application-logger/ApplicationLogger';

import Piece from '../Piece';

import DirectorDanceRabbitDance from '../../director/directors/DirectorDanceRabbitDance';

export default class PieceOne extends Piece {
	#DIRECTOR_DANCE_RABBIT_DANCE;

	// _________________________________________________________________________

	constructor() {
		super();

		ApplicationLogger.log('PieceOne', this.LOG_LEVEL);

		this.#DIRECTOR_DANCE_RABBIT_DANCE = new DirectorDanceRabbitDance();
	}
}
