import ApplicationLogger from '../../application/ApplicationLogger';

import Piece from '../Piece';

import DirectorDanceRabbitDance from '../../director/directors/DirectorDanceRabbitDance';

export default class PieceOne extends Piece {
	#DIRECTOR_DANCE_RABBIT_DANCE;

	// _________________________________________________________________________

	constructor() {
		super();

		ApplicationLogger.log('PieceOne', this.LOG_LEVEL);

		// Create Required Directors
		this.#DIRECTOR_DANCE_RABBIT_DANCE = new DirectorDanceRabbitDance();
	}

	// ____________________________________________________________________ Tick

	tick(frameDeltaMS) {
		super.tickFrameRate(frameDeltaMS);

		// Update Directors
		this.#DIRECTOR_DANCE_RABBIT_DANCE.tick(frameDeltaMS);
	}

	// _________________________________________________________ Tick Frame Rate

	tickFrameRate() {
		super.tickFrameRate();

		// Update Directors
		this.#DIRECTOR_DANCE_RABBIT_DANCE.tickFrameRate();
	}
}
