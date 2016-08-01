import { RouterConfig } from '@angular/router';
import { PokemonDetailComponent } from '../component/pokemon-detail.component';
export const appRouterProviders: RouterConfig = [
	{ path: 'pokemon', component: PokemonDetailComponent }
]