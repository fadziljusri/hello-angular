import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule} from './app.routing'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { TopnavComponent } from './user-dashboard/topnav/topnav.component';
import { SidenavComponent } from './user-dashboard/sidenav/sidenav.component';
import { RegisterComponent } from './register/register.component';
import { P404Component } from './p404/p404.component';
import { P500Component } from './p500/p500.component';
import { Example1Component } from './user-dashboard/example1/example1.component';
import { Example2Component } from './user-dashboard/example2/example2.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserDashboardComponent,
    TopnavComponent,
    SidenavComponent,
    RegisterComponent,
    P404Component,
    P500Component,
    Example1Component,
    Example2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
