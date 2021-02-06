import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Candidatos';

  Sergio = new Candidato('Sergio',23,'82 Kg', 'Raptalo', '../assets/sergio.png')
  Espe = new Candidato('Espe',23,'60 Kg','Junco','../assets/esperanza.png')
  Mario = new Candidato('Mario',20,'90 Kg','Balrod','../assets/mario.png')
  candidatos:Candidato[] = [this.Sergio, this.Espe, this.Mario]
  
  opciones:number=0;

  selecSergio(){
    this.opciones = 1;
  }

  selecEspe(){
    this.opciones = 2;
  }

  selecMario(){

  }

  ocultar(){
    this.opciones = 0;
  }
}

export class Candidato {
  
  nombre:string;
  edad:number;
  pesos:string;
  alias:string;
  imagen:string;

  constructor(nombre:string, edad:number, pesos:string, alias:string, imagen:string) {
    this.nombre = nombre;
    this.edad = edad;
    this.pesos = pesos;
    this.alias = alias;
    this.imagen = imagen;
  }

 
}
