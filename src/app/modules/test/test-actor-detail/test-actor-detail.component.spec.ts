import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestActorDetailComponent } from './test-actor-detail.component';

describe('TestActorDetailComponent', () => {
  let component: TestActorDetailComponent;
  let fixture: ComponentFixture<TestActorDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestActorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestActorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
