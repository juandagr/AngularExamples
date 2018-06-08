import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestActorsComponent } from './test-actors.component';

describe('TestActorsComponent', () => {
  let component: TestActorsComponent;
  let fixture: ComponentFixture<TestActorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestActorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestActorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
