export class Utilities {
	getPokemonIdFromUrl(url: string): number {
		return +url.replace(/^.*?pokemon-species\/(\d+)\/$/, "$1");
	}
}