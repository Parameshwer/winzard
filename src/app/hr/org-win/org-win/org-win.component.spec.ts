import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgWinComponent } from './org-win.component';

describe('OrgWinComponent', () => {
  let component: OrgWinComponent;
  let fixture: ComponentFixture<OrgWinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgWinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgWinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
