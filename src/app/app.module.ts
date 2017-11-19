import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { GuideComponent } from './guide/guide.component';
import { AlertComponent } from './common/alert/alert.component';
import { NavComponent } from './common/nav/nav.component';
import { UsersComponent } from './users/users.component';
import { SurveyComponent } from './survey/survey.component';
import { SurveyFormComponent } from './common/survey-form/survey-form.component';
import { TabsComponent } from './common/tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GuideComponent,
    AlertComponent,
    HomeComponent,
    NavComponent,
    UsersComponent,
    SurveyComponent,
    SurveyFormComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ModalModule.forRoot()
  ],
  entryComponents: [
    AlertComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
