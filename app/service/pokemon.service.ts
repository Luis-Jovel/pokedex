import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class PokemonService {
	constructor(private http: Http) {}
	getPokemons(): Observable<any> {
		// return this.http.get('http://pokeapi.co/api/v2/pokemon')
		return this.http.get('http://pokeapi.co/api/v2/generation/1')
			// .map((res: Response) => res.json().results)
			.map((res: Response) => res.json().pokemon_species)
			.catch(this.handleError);
	}
	private handleError (error: any) {
		let errMsg = (error.message) ? error.message :
			error.status ? `${error.status} - ${error.statusText}` : 'Server error';
		console.error(errMsg);
		return Observable.throw(errMsg);
	}
}