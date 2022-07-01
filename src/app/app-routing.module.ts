import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OptionsComponent } from './components/options/options.component';
import { TriviaDota2Component } from './components/trivia-dota2/trivia-dota2.component';
import { TriviaLolComponent } from './components/trivia-lol/trivia-lol.component';


const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'home', component: OptionsComponent},
  {path: 'quiz-dota2', component: TriviaDota2Component},
  {path: 'quiz-lol', component: TriviaLolComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
