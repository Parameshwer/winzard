import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatCompanyComponent } from './what-company.component';

describe('WhatCompanyComponent', () => {
  let component: WhatCompanyComponent;
  let fixture: ComponentFixture<WhatCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
