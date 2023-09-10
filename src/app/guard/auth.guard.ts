import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TypeAuth } from '../auth/models/auh.model';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate() {
    const user = localStorage.getItem('userAuth')!
    if( user == TypeAuth.admin || user == TypeAuth.user ){
      return true;
    }

    this.router.navigate(['/login'])
    return false
  }
  
}
