import { Component, OnInit } from '@angular/core';
import { AppRoutes} from '../app.constants';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  
  AppRoutes = AppRoutes;
  r = {
    name: 'test',
    email: 'test@gmail.com',
    password: 'p@ssw0rd',
    rePassword: 'p@ssw0rd'
  };

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  doReg(){
    this._router.navigate([this.AppRoutes.userDashboard]);
  }

}
