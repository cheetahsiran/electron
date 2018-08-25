import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth/auth.component';
import { WithAuthComponent } from './layouts/withAuth/withAuth.component';

export const AppRoutes: Routes =[{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full',
},
{
  path:'',
  component: WithAuthComponent,
  children:[{
    path:'dashboard',
    loadChildren: './dashboard/dashboard.component.module#DashboardModule'
  }]
},
{
  path:'',
  component: AuthLayoutComponent,
  children:[{
    path: 'login',
    loadChildren: './login/login.module#LogindModule'
  }]
}, {
  path: '**',
  redirectTo: 'session/404'
}];
