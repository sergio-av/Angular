import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aplicacion calculadora';
  operadorA:number = 0;
  operadorB:number = 0;
  resultado:number = 0;

  operacionSumar(){
    this.resultado = this.operadorA + this.operadorB;
  }

  operacionRestar(){
    this.resultado = this.operadorA - this.operadorB;
  }
  
  operacionMultiplicar(){
    this.resultado = this.operadorA * this.operadorB;
  }

  operacionDividir(){
    this.resultado = this.operadorA / this.operadorB;
  }
}
