import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCreationComponent } from './product-creation/product-creation.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
//
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule
import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    ProductListComponent,
    ProductCreationComponent,
    ProductEditComponent
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
