import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private router: Router
  ) { }

  login( typeAuth: string ){
    localStorage.setItem('userAuth', typeAuth)
    this.router.navigate(['form/builder'])
  }

}
