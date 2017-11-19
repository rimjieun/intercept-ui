import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AlertComponent } from './common/alert/alert.component';
import { NavComponent } from './common/nav/nav.component';
import { UsersComponent } from './users/users.component';
import { SurveyComponent } from './survey/survey.component';
import { SurveyFormComponent } from './common/survey-form/survey-form.component';
import { TabsComponent } from './common/tabs/tabs.component';
import { SearchResultsComponent } from './common/search-results/search-results.component';
import { OrganizationProfileComponent } from './organization-profile/organization-profile.component';
import { NavService } from './services/nav.service';
import { AjaxService } from './services/ajax.service';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    NavComponent,
    UsersComponent,
    SurveyComponent,
    SurveyFormComponent,
    TabsComponent,
    SearchResultsComponent,
    OrganizationProfileComponent
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
  providers: [NavService, AjaxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
