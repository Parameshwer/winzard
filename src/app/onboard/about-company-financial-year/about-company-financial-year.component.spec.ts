import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCompanyFinancialYearComponent } from './about-company-financial-year.component';

describe('AboutCompanyFinancialYearComponent', () => {
  let component: AboutCompanyFinancialYearComponent;
  let fixture: ComponentFixture<AboutCompanyFinancialYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutCompanyFinancialYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutCompanyFinancialYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
