import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['']);
  }

  dota2(){
    this.router.navigate(['quiz-dota2']);
  }

  lol(){
    this.router.navigate(['quiz-lol']);
  }
}

