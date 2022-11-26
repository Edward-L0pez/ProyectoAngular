import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado.model';
import { EmpleadosService } from './empleados.service';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'Listado de Empleados';

constructor(private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosService){

  //this.empleados=this.empleadosService.empleados;
}
  ngOnInit(): void {
      }


}
