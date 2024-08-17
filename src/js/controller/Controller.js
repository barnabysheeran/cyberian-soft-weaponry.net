import PieceOne from '../piece/pieces/PieceOne';

export default class Controller {
	#PIECE;

	// _________________________________________________________________________

	constructor() {
		// Create Piece
		this.#PIECE = new PieceOne();
	}

	// ____________________________________________________________________ Tick

	tick(frameDeltaMS) {
		// Tick Piece
		this.#PIECE.tick(frameDeltaMS);
	}
}
