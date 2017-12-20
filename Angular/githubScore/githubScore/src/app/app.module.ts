import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule

import { AppComponent } from './app.component';
import { DataService } from './data.service'; 

import { HttpClientModule } from '@angular/common/http';
import { AlphaComponent } from './alpha/alpha.component';
import { BetaComponent } from './beta/beta.component';



@NgModule({
  declarations: [
    AppComponent,
    AlphaComponent,
    BetaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- Include module in our AppModules
		HttpModule, // <-- Include module in our AppModules
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
