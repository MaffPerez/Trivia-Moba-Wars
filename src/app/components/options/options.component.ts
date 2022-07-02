import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
  lol: boolean;
  abejita = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['']);
  }

  showDota2(){
    this.router.navigate(['quiz-dota2']);
  }

  showLol(){
    this.lol = true
    this.abejita = true
    // this.router.navigate(['quiz-lol']);
  }
}

