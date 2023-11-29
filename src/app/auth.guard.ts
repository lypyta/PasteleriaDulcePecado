import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree , Router} from '@angular/router';
import { Observable } from 'rxjs';
import{Storage} from '@ionic/storage-angular';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private router :Router,private authservice : AuthService, private storage : Storage){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    const isAutehenticted = true;

    if (isAutehenticted){
      return true;
    }else{
      //redirigir al ingreso del login 
      this.router.navigate(['/login']);
      return false ;
    }


    
  }
  
}
