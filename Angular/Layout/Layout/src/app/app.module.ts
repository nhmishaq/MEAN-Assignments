import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { MainComponentComponent } from './main-component/main-component.component';
//
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    NavComponentComponent,
    MainComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- Include module in our AppModules
		HttpModule // <-- Include module in our AppModules    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
