import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from './customs/material.module';
import { HttpClientModule } from '@angular/common/http';

import { DataService } from './services/data.service';
import { RestApiService } from './services/rest-api.service';
import { AuthGuardService } from './services/auth-guard.service';

import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [AuthGuardService, DataService, RestApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
