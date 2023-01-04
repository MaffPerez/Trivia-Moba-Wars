import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['']);
  }

  showDota2(){
    this.router.navigate(['dota2/questions']);
  }

  showLol(){
    this.router.navigate(['lol/trivialol']);
  }

}
