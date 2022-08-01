import { Component, OnInit } from '@angular/core';
import { pokemonService } from 'src/app/Core/service-pokemon.service';

@Component({
  selector: 'app-details-pokemon',
  templateUrl: './details-pokemon.component.html',
  styleUrls: ['./details-pokemon.component.scss']
})
export class DetailsPokemonComponent implements OnInit {
  namePokemon: any;
  idPokemon: any;
  erro: any;
  personagensPokemon:any;
  constructor(
    private servicePokemon: pokemonService,
  ) { }

  ngOnInit(): void {
    this.idPokemon = localStorage.getItem('PokemonId');
    this.getPokemon();
  }

  getPokemon(){
    this.servicePokemon.getPokemon(this.idPokemon).subscribe(
      (res:any)=>
    {
      console.log(res);
      this.personagensPokemon = res;
    },
    (error: any) => {
      this.erro = error;
    });
  }

}
