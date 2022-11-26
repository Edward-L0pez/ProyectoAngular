import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrls: ['./caracteristicas-empleado-c.component.css']
})
export class CaracteristicasEmpleadoCComponent implements OnInit {

  @Output() caracteristicasEmpleados = new EventEmitter<string>();

  

  constructor(private miServicio:ServicioEmpleadosService) { }

  ngOnInit(): void {
  }
  agregarCarecteristicas(value:string) {
    this.miServicio.MuestraMensaje(value);
    this.caracteristicasEmpleados.emit(value);
  }

}
