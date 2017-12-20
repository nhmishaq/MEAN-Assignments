import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainbodyComponent } from './mainbody/mainbody.component';
//
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http';
import { DetailsComponent } from './details/details.component'; // <-- Import HttpModule
import { DataService } from './data.service';
import { ChicagoComponent } from './chicago/chicago.component';
import { DallasComponent } from './dallas/dallas.component';
import { DcComponent } from './dc/dc.component';
import { LaComponent } from './la/la.component';
import { SeattleComponent } from './seattle/seattle.component';
import { SanjoseComponent } from './sanjose/sanjose.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainbodyComponent,
    DetailsComponent,
    ChicagoComponent,
    DallasComponent,
    DcComponent,
    LaComponent,
    SeattleComponent,
    SanjoseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // <-- Include module in our AppModules
		HttpModule // <-- Include module in our AppModules
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
