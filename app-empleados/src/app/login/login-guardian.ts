import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";

@Injectable()
export class loginGuardian implements CanActivate{

    constructor(private loginService:LoginService, private router:Router){}
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
       if(this.loginService.estaLogeado()){
        return true;
       
    }
    else{
        this.router.navigate(['login']);
        return false;
    }

    }

}