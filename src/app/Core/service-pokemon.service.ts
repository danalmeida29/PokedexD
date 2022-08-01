import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

@Injectable({
  providedIn: 'root'
})


export class pokemonService {

  constructor(private http: HttpClient) { }

  getPokemon(id: any){
    var urlString = `${BASE_URL}/${id}`;
    return this.http.get(urlString);
  }
}
