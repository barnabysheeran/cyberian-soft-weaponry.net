import PieceOne from '../piece/pieces/PieceOne';

export default class Controller {
	#FRAMERATE_FPS = 2;
	#FRAMERATE_MS = 1000 / this.#FRAMERATE_FPS;

	#frameRateDelayMS = 0;

	#PIECE;

	// _________________________________________________________________________

	constructor() {
		// Create Piece
		this.#PIECE = new PieceOne();
	}

	// ____________________________________________________________________ Tick

	tick(frameDeltaMS) {
		// Frame Rate Delay
		this.#frameRateDelayMS += frameDeltaMS;

		// Next Frame ?
		if (this.#frameRateDelayMS > this.#FRAMERATE_MS) {
			// Reset
			this.#frameRateDelayMS -= this.#FRAMERATE_MS;

			// Tick Piece at Frame Rate
			this.#PIECE.tickFrameRate(this.#FRAMERATE_MS);
		}
	}
}
