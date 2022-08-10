import { Component, OnInit } from '@angular/core';
import { pokemonService } from 'src/app/Core/service-pokemon.service';
import { TypeColorModel } from 'src/app/Models/ModelTypeColor';

@Component({
  selector: 'app-details-pokemon',
  templateUrl: './details-pokemon.component.html',
  styleUrls: ['./details-pokemon.component.scss']
})
export class DetailsPokemonComponent implements OnInit {

  //#region variables
  namePokemon: any;
  idPokemon: any;
  Erro: any;
  corPorTipo: any;
  personagensPokemon:any;
  typeDamage: any;
  //#endregion
  //#region Arrays
  typeColor: TypeColorModel[] = [];
  types: any[] = []
  pontosFortes: any[] = []
  pontosFracos: any[] = []
  //#endregion
  
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
   * Responsável por obter os dados do pokemon selecionado
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
 * Responsável por atribuir os pontos fracos e fortes do pokemon.
 */
  getType() {
    for (let index = 0; index < this.types.length; index++) {
      const element = this.types[index];

      this.servicePokemon.getType(element.url).subscribe(
        (res:any)=>{
          this.relationDamage(res.damage_relations.double_damage_from, this.pontosFracos)
          this.relationDamage(res.damage_relations.double_damage_to, this.pontosFortes)
          this.comparingSimilarPoints();
        },
        (error: any) => {
          this.Erro = error;
          alert(this.Erro);
        }
      ); 
      
    }    
  }

  /**
   * 
   */
  comparingSimilarPoints(){

    for (let indexFracos = 0; indexFracos < this.pontosFracos.length; indexFracos++){
      const pontosFracos = this.pontosFracos[indexFracos];

      for (let indexFortes = 0; indexFortes < this.pontosFortes.length; indexFortes++){
        const pontosFortes = this.pontosFortes[indexFortes];

        if(pontosFracos.name == pontosFortes.name){
          this.pontosFracos.splice(indexFracos, 1);
          this.pontosFortes.splice(indexFortes, 1);
        }
      }
    }
  }

  /**
   * Metodo que obtem e atribui a quantidade de pontos fracos e fortes e a cor de cada elemento.
   * @param verificador [Array]: Quantidade total de elementos que o pokemon atribui como ponto fracos e fortes.
   * @param arrayAtribuido [Array]: Nome e a cor de cada tipo de elemento
   */
  relationDamage(verificador: Array<any>, arrayAtribuido: Array<any>) {

    for (let index = 0; index < verificador.length; index++) {

      let isRepetead = false;
      const element = verificador[index];

      this.validatingColorByType(element.name);
      
      for (let index = 0; index < arrayAtribuido.length; index++) {
        const newElement = arrayAtribuido[index];

        if (element.name == newElement.name) {
          isRepetead = true;
        }  
      }
      if (!isRepetead) {
        arrayAtribuido.push({name: element.name ,color: this.corPorTipo}).toFixed;        
      }
      
    };
  }

  /**
   * Metodo que atribui a cor de acordo com o tipo passado como parametro
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
