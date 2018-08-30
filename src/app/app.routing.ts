import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutes } from './app.constants';
import { LoginComponent } from './login/login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { RegisterComponent } from './register/register.component';
import { P404Component } from './p404/p404.component';
import { P500Component } from './p500/p500.component';
import { Example1Component } from './user-dashboard/example1/example1.component';
import { Example2Component } from './user-dashboard/example2/example2.component';

const routes: Routes = [
    { path: '', redirectTo: AppRoutes.userDashboard, pathMatch: 'full' },
    {
        path: AppRoutes.login,
        component: LoginComponent
    },
    {
        path: AppRoutes.register,
        component: RegisterComponent
    },
    {
        path: AppRoutes.p404,
        component: P404Component
    },
    {
        path: AppRoutes.p500,
        component: P500Component
    },
    {
        path: AppRoutes.userDashboard,
        component: UserDashboardComponent,
        children: [
            { path: '', redirectTo: AppRoutes.userExample1, pathMatch: 'full' },
            { path: AppRoutes.userExample1, component: Example1Component },
            { path: AppRoutes.userExample2, component:Example2Component}
        ]
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
