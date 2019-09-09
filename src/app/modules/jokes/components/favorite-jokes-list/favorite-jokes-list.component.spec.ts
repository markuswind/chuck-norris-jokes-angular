import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteJokesListComponent } from './favorite-jokes-list.component';

describe('FavoriteJokesListComponent', () => {
  let component: FavoriteJokesListComponent;
  let fixture: ComponentFixture<FavoriteJokesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteJokesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteJokesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
