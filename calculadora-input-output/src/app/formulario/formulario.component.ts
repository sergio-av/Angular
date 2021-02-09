import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() resultadoSuma = new EventEmitter<number>();
  @Output() resultadoResta = new EventEmitter<number>();
  @Output() resultadoMultiplicacion = new EventEmitter<number>();
  @Output() resultadoDivision = new EventEmitter<number>();

  operadorA:number = 0;
  operadorB:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  operacionSumar(){
    let resultado = this.operadorA + this.operadorB;
    this.resultadoSuma.emit(resultado); 
  }

  operacionRestar(){
    let resultado = this.operadorA - this.operadorB;
    console.log('resultado', resultado)
    this.resultadoResta.emit(resultado); 
  }
  
  operacionMultiplicar(){
    let resultado = this.operadorA * this.operadorB;
    console.log('resultado', resultado)
    this.resultadoMultiplicacion.emit(resultado); 
  }

  operacionDividir(){
    let resultado = this.operadorA / this.operadorB;
    console.log('resultado', resultado)
    this.resultadoDivision.emit(resultado); 
  }
}
