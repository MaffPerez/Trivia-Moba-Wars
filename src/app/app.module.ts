import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { OptionsComponent } from './components/options/options.component';
import { TriviaLolComponent } from './components/trivia-lol/trivia-lol.component';
import { TriviaDota2Component } from './components/trivia-dota2/trivia-dota2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OptionsComponent,
    TriviaLolComponent,
    TriviaDota2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
