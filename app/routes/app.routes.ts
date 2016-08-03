import { provideRouter, RouterConfig } from '@angular/router';
import { PokemonDetailComponent } from '../component/pokemon-detail.component';
import { PokemonListComponent } from '../component/pokemon-list.component';

const routes: RouterConfig = [
	{ path: '', component: PokemonListComponent },
	{ path: ':generation', component: PokemonListComponent },
	{ path: 'pokemon', component: PokemonListComponent },
	{ path: 'pokemon/:id', component: PokemonDetailComponent },
	{ path: '**', component: PokemonListComponent }
];
export const appRouterProviders = [
	provideRouter(routes)
];