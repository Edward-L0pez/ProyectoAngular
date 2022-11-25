import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Trabajo Directiva';
  mensaje = '';
  registrado = false;
  nombre: string = "";
  apellido: string = "";
  entradas: Array<{titulo:string}>;

constructor(){
  this.entradas=[
    {titulo:"Phython es cada día mas presente"},
    {titulo:"Java es feo"},
    {titulo:"Php mi patron"},
    {titulo:"javaScript es peor quer java y esta sobrevalorado"},
    {titulo:"html es basic"},
  ]
}

  registrarUsuario() {

    this.registrado = true
    this.mensaje = "Este usuario fue regitrado"


  }

}
