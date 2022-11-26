import { Injectable } from "@angular/core";
import { DataServices } from "./data.services";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
export class EmpleadosService{
    
constructor(private sevicioVentanaEmergente: ServicioEmpleadosService,private dataService:DataServices){

    
}

obtenerEmpleados(){
  return  this.dataService.cargarEmpleados();
}

SetEmpleados(misEmpleados:Empleado[]){
this.empleados=misEmpleados
}

empleados:Empleado[]=[];




    // empleados:Empleado[]=[

    //     new Empleado("Juan", "Díaz", "Presidente", 7500),
    //     new Empleado("Edward", "López", "Director", 50000),
    //     new Empleado("Ariam", "Zapata", "Administrativa", 500),
    //     new Empleado("Abril", "Cherrez", "Jefa de sección", 500),
        
        
    //       ];

          agregarEmpleado(empleado:Empleado){

            this.sevicioVentanaEmergente.MuestraMensaje("Persona que se va agregar: "+ "\n"+ empleado.nombre +  "\n"+"salario es: "+ empleado.salario)
            this.empleados.push(empleado);
            this.dataService.guardarEmpleados(this.empleados);

          }

          actualizarEmpleado(indice:number, empleado:Empleado){
            let empleadoModificaco= this.empleados[indice];

            empleadoModificaco.nombre=empleado.nombre;
            empleadoModificaco.apellido=empleado.apellido;
            empleadoModificaco.cargo=empleado.cargo;
            empleadoModificaco.salario=empleado.salario;

this.dataService.actualizarEmpleados(indice,empleado);
          }

          eliminarEmpleado(indice:number){
            this.empleados.splice(indice,1);
            this.dataService.eliminarEmpleados(indice);
            if(this.empleados!=null){
              this.dataService.guardarEmpleados(this.empleados);
            }
          }
          

          encontrarEmpleado(indice:number){
            
            let empleado:Empleado=this.empleados[indice];

            return empleado;
          }
}