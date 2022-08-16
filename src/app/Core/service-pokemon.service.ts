import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'https://pokeapi.co/api/v2';

@Injectable({
  providedIn: 'root'
})


export class pokemonService {

  constructor(private http: HttpClient) { }
  pokemons: any;
  erro: any;

  getPokemon(id: any){
    var urlString = `${BASE_URL}/pokemon/${id}`;
    return this.http.get(urlString);
  }

  getType(url: string){
    return this.http.get(url);
  }

  carregarPokemons() {
    var urlString = `${BASE_URL}/pokemon?limit=905&offset=0`;
    return this.http.get(urlString);
  }
}
