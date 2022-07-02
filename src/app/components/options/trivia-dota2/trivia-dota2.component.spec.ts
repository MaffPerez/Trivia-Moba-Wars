import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriviaDota2Component } from './trivia-dota2.component';

describe('TriviaDota2Component', () => {
  let component: TriviaDota2Component;
  let fixture: ComponentFixture<TriviaDota2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriviaDota2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriviaDota2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
