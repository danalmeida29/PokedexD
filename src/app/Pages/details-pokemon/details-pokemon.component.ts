import { Component, OnInit } from '@angular/core';
import { pokemonService } from 'src/app/Core/service-pokemon.service';
import { TypeColorModel } from 'src/app/Models/ModelTypeColor';

@Component({
  selector: 'app-details-pokemon',
  templateUrl: './details-pokemon.component.html',
  styleUrls: ['./details-pokemon.component.scss']
})
export class DetailsPokemonComponent implements OnInit {
  namePokemon: any;
  idPokemon: any;

  Erro: any;
  corPorTipo: any;

  personagensPokemon:any;
  returnTypePokemon:any;

  typeColor: TypeColorModel[] = [];
  types: any[] = []
  pontoForte: any[] = []
  pontoFraco: any[] = []
  typeDamage: any;

  damageColor: TypeColorModel[] = [];
  damageToColor: TypeColorModel[] = [];
  constructor(
    private servicePokemon: pokemonService,
  ) { }

  ngOnInit(): void {
    this.idPokemon = localStorage.getItem('PokemonId');
    this.getPokemon();    
  }

  /**
   * Metodo que adquiri o tipo do pokemon e retorna o tipo e a cor no final 
   */
  getPokemon(){
    this.servicePokemon.getPokemon(this.idPokemon).subscribe(
      (res:any)=>
    {
      this.personagensPokemon = res;

      for (let index = 0; index < this.personagensPokemon.types.length; index++) {
        const element = this.personagensPokemon.types[index];

        this.types.push({name: element.type.name,url: element.type.url})

        this.validatingColorByType(element.type.name);

        this.typeColor.push({type: element.type.name ,color: this.corPorTipo}).toFixed;
      }

      this.getType();
    },
    (error: any) => {
      this.Erro = error;
      alert(this.Erro);
    });
  }

/**
 * Metodo utilizado para retorna os pontos fracos e fortes do pokemon.
 */
  getType() {
    for (let index = 0; index < this.types.length; index++) {
      const element = this.types[index];
      console.log(index)

      this.servicePokemon.getType(element.url).subscribe(
        (res:any)=>{
          this.returnTypePokemon = res;
          this.relationDamage(this.returnTypePokemon.damage_relations.double_damage_from, this.pontoFraco)
          this.relationDamage(this.returnTypePokemon.damage_relations.double_damage_to, this.pontoForte)
        },
        (error: any) => {
          this.Erro = error;
          alert(this.Erro);
        }
      );      
    }    
  }

  /**
   * Metodo que atribui a quantidade de pontos fracos e fortes e a cor de cada elemento adquirido.
   * @param verificador [Array]: Parametro que define a quantidade total de elementos que o pokemon atribui como ponto fracos e fortes.
   * @param arrayAtribuido [Array]: Parametro que define o nome e a cor de cada tipo de elemento
   */
  relationDamage(verificador: Array<any>, arrayAtribuido: Array<any>) {

    for (let index = 0; index < verificador.length; index++) {

      const element = verificador[index];

      this.validatingColorByType(element.name);
      
      arrayAtribuido.push({name: element.name ,color: this.corPorTipo}).toFixed;
    };
  }

  /**
   * metodo que atribui a cor de acordo com o tipo passado como parametro
   * @param tipo [String] : parametro que define os tipos dos pokemons.
   */
  validatingColorByType(tipo: string){
    switch (tipo) {

      case "bug":
        this.corPorTipo = "#9BBA48;" 
      break; 

      case "drak":
        this.corPorTipo = "#595761;;"
      break; 

      case "dragon":
        this.corPorTipo = "#2C6AC1;"
      break; 

      case "eletric":
        this.corPorTipo = "#D4BC34;"
      break; 

      case "fighting":
        this.corPorTipo = "#C44D61;"
      break; 

      case "flying":
        this.corPorTipo = "#758CBD;"
      break;

      case "fire":
        this.corPorTipo = "#E96303;"
      break; 

      case "fairy":
        this.corPorTipo = "#E296E1;"
      break; 

      case "grass":
        this.corPorTipo = "#73B861;"
      break;

      case "ground":
        this.corPorTipo = "#CE8056;"
      break;

      case "ghost":
        this.corPorTipo = "#616EB7;"
      break;

      case "ice":
        this.corPorTipo = "#71BAAC;"
      break;

      case "normal":
        this.corPorTipo = "#909090;"
      break;

      case "poison":
        this.corPorTipo = "#AC6ACA;"
      break;  

      case "psychic":
        this.corPorTipo = "#EB8B85;"
      break; 

      case "rock":
        this.corPorTipo = "#84BEB3;"
      break;  

      case "rock":
        this.corPorTipo = "#6594A1;"
      break; 

      case "water":
        this.corPorTipo = "#4F77BE;"
      break; 

      default:
        this.corPorTipo = "gray"
      break;
    }
  }

  
  

}
