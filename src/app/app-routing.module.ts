import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from 'app/home/home.component';
import { GuideComponent } from 'app/guide/guide.component';
import { LoginComponent } from 'app/login/login.component';


export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'request', loadChildren:'./request/request.module#RequestModule'},
  { path: 'login', component: LoginComponent },
  { path: 'guide', component: GuideComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
