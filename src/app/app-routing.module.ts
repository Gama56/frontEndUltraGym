import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GymreadComponent } from './gymread/gymread.component';
import { GyminfoComponent } from './gyminfo/gyminfo.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'gymread',
    component: GymreadComponent
  },
  {
    path: 'gyminfo',
    component: GyminfoComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
