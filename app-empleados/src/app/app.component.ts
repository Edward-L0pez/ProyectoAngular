import { Component, OnInit } from '@angular/core';

import { EmpleadosService } from './empleados.service';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import  firebase  from 'firebase/compat/app';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'Listado de Empleados';

constructor(private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosService,  private loginService:LoginService){

  //this.empleados=this.empleadosService.empleados;
}
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyBDqig0zU-u81w0Bza1CLTNnRfQ_EBm3cY",
      authDomain: "mis-clientes-de554.firebaseapp.com",
    });
      }


      estaLogueado(){
        return this.loginService.estaLogeado();
      }

      logout(){
        this.loginService.logout();
      }
}
