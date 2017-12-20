import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { AddQuoteComponent } from './quotes/add-quote/add-quote.component';
import { QuoteListComponent } from './quotes/quote-list/quote-list.component';

import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule


@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    AddQuoteComponent,
    QuoteListComponent
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
