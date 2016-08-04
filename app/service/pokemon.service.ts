import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';
import { Utilities } from './utilities'

let util : Utilities;
@Injectable()
export class PokemonService {
	constructor(private http: Http) {
		util = new Utilities()
	}
	getPokemonGenerations() : Observable<any> {
		return this.http.get('http://pokeapi.co/api/v2/generation')
			.map((res: Response) => _.map(res.json().results, ((gen : any) => {
				gen.id = gen.name;
				gen.name = gen.name.replace("-"," ");
				return gen;
			})))
			.catch(this.handleError);
			
	}
	getPokemons(generation : string): Observable<any> {
		return this.http.get('http://pokeapi.co/api/v2/generation/' + generation)
			.map((res: Response) => {
				let pokemons: any = res.json().pokemon_species;
				pokemons.forEach((pokemon : any) => {
					pokemon.id = util.getPokemonIdFromUrl(pokemon.url);
				});
				return _.sortBy(pokemons, 'id');
			})
			.catch(this.handleError);
	}
	getPokemon(id : number): Observable<any> {
		return this.http.get('http://pokeapi.co/api/v2/pokemon/' + id)
			.map((res : Response) => {
				let pokemon = res.json();
				pokemon.stats = _.sortBy(pokemon.stats, "stat.name");
				pokemon.stats = _.map(pokemon.stats, (stat : any) => {
					stat.stat.name = stat.stat.name.replace("-"," ");
					return stat;
				});
				return pokemon;
			})
			.catch(this.handleError);
	}
	getPokemonSpecies(id : number) : Observable<any> {
		return this.http.get('http://pokeapi.co/api/v2/pokemon-species/' + id)
			.map((res : Response) => res.json())
			.catch(this.handleError);
	}
	
	getEvolutionChain(url : string) : Observable<any> {
		return this.http.get(url)
			.map((res: Response) => {
				let evolutions = res.json().chain;
				let evolution_chain : any[] = [];
				let reading : boolean = true;
				while (reading) {
					let pokemon = evolutions.species;
					evolution_chain.push({
						name: pokemon.name, 
						id: util.getPokemonIdFromUrl(pokemon.url)
					});
					if(evolutions.evolves_to.length > 0)
						evolutions = evolutions.evolves_to[0];
					else
						reading = false;
				}
				return evolution_chain;
			})
			.catch(this.handleError);
			
	}
	private handleError (error: any) {
		let errMsg = (error.message) ? error.message :
			error.status ? `${error.status} - ${error.statusText}` : 'Server error';
		console.error(errMsg);
		return Observable.throw(errMsg);
	}
}