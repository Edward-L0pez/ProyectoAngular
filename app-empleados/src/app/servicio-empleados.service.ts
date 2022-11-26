import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleadosService {

  constructor() { }

  MuestraMensaje(mensaje:string){
    
    alert(mensaje)
    
  }

}
