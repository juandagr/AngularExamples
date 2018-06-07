import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiTestCardComponent } from './ui-test-card.component';

describe('UiTestCardComponent', () => {
  let component: UiTestCardComponent;
  let fixture: ComponentFixture<UiTestCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiTestCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiTestCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
