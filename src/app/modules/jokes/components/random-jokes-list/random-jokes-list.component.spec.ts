import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomJokesListComponent } from './random-jokes-list.component';

describe('RandomJokesListComponent', () => {
  let component: RandomJokesListComponent;
  let fixture: ComponentFixture<RandomJokesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomJokesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomJokesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
