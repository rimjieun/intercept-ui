import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from 'app/home/home.component';
import { GuideComponent } from 'app/guide/guide.component';
import { LoginComponent } from 'app/login/login.component';
import { UsersComponent } from 'app/users/users.component';
import { SurveyComponent } from 'app/survey/survey.component';
import { SurveyFormComponent } from 'app/common/survey-form/survey-form.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'request', loadChildren:'./request/request.module#RequestModule'},
  { path: 'login', component: LoginComponent },
  { path: 'guide', component: GuideComponent },
  { path: 'users', component: UsersComponent },
  { path: 'survey', component: SurveyComponent },
  { path: 'survey-form', component: SurveyFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
