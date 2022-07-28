import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPokemonComponent } from './Pages/details-pokemon/details-pokemon.component';
import { ListPokemonComponent } from './Pages/list-pokemon/list-pokemon.component';

const routes: Routes = [
{ path:'', component: ListPokemonComponent },
{ path:'details', component: DetailsPokemonComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
