import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { LoginService } from "./login/login.service";

@Injectable()
export class DataServices {

constructor(private httpClient:HttpClient, private loginServices:LoginService){}

cargarEmpleados(){
  
    const token=this.loginServices.getIdToken();
    return this.httpClient.get('https://mis-clientes-de554-default-rtdb.firebaseio.com/datos.json?auth='+token);

}


    guardarEmpleados(empleados:Empleado[]){

        this.httpClient.put('https://mis-clientes-de554-default-rtdb.firebaseio.com/datos.json',empleados).subscribe(


        response=>console.log("Se han guardado los empleos: " + response),
        error=> console.log("Error: " +error),

        );
   
    }


actualizarEmpleados(indice:number, empleado:Empleado){
    let url='https://mis-clientes-de554-default-rtdb.firebaseio.com/datos/' + indice + '.json';

    
    this.httpClient.put(url,empleado).subscribe(


        response=>console.log("Se han modificado los datos: " + response),
        error=> console.log("Error: " +error),

        );
   


}
eliminarEmpleados(indice:number){
    let url='https://mis-clientes-de554-default-rtdb.firebaseio.com/datos/' + indice + '.json';

    
    this.httpClient.delete(url).subscribe(


        response=>console.log("Se han eliminado los datos: " + response),
        error=> console.log("Error: " +error),

        );
   


}

}
