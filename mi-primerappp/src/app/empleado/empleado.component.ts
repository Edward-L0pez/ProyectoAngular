import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

nombre = "Ealz";
apellido = "López";
 edad = 17;

habilitacioncuadro = false;
usuarioRegis=false;
textodeRegistro="No hay nandie registrado ¡¡CUIDADO!!!"
//  getEdad(){

getRegistroUsuario(){
  this.usuarioRegis=false;

}

setUsauarioRegister(event:Event){
  // alert("El usuario se acaba de registrar");
 // this.textodeRegistro="Usuario Registrado";
if((<HTMLInputElement>event.target).value=="si"){
  this.textodeRegistro="Usuario Registrado";
}else{
  this.textodeRegistro="Usuario noo Registrado";
}
}
  
//   return this.edad;
//  }

// llamadoEmpresa(value:string){

// }

constructor() { }

  ngOnInit(): void {
  }

}
