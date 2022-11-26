import { Empleado } from "./empleado.model";

export class EmpleadosService{
    
    empleados:Empleado[]=[

        new Empleado("Juan", "Díaz", "Presidente", 7500),
        new Empleado("Edward", "López", "Director", 50000),
        new Empleado("Ariam", "Zapata", "Administrativa", 500),
        new Empleado("Abril", "Cherrez", "Jefa de sección", 500),
        
        
          ];

          agregarEmpleado(empleado:Empleado){
            this.empleados.push(empleado);
          }
}