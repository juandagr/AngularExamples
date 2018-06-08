import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiCountriesComponent } from './ui-countries.component';

describe('UiCountriesComponent', () => {
  let component: UiCountriesComponent;
  let fixture: ComponentFixture<UiCountriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiCountriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
