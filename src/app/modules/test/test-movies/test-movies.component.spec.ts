import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMoviesComponent } from './test-movies.component';

describe('TestMoviesComponent', () => {
  let component: TestMoviesComponent;
  let fixture: ComponentFixture<TestMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
