import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutes} from '../app.constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  AppRoutes = AppRoutes;
  login = {
    email: 'test@test.com',
    password: 'whydoyouwanttoknowthispassword'
  };

  constructor(private router: Router ) { }

  ngOnInit() {
  }

  doLogin() {
    this.router.navigate([this.AppRoutes.userDashboard]);
  }

}
