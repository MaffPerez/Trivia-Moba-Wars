import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriviaLolComponent } from './trivia-lol.component';

describe('TriviaLolComponent', () => {
  let component: TriviaLolComponent;
  let fixture: ComponentFixture<TriviaLolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriviaLolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriviaLolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
