import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Lista de Personas';

  listaNombres: string[] =[];

  nombre: string="";
  apellido: string="";

  meterNombre(){
    if (this.nombre == "" || this.apellido == "") {
      alert('Porfavor introduzca su nombre completo')
    }else{
    this.listaNombres.push(this.nombre.concat(" ",this.apellido));
    }
    return this.listaNombres;
  }
}
