import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupOrgComponent } from './setup-org.component';

describe('SetupOrgComponent', () => {
  let component: SetupOrgComponent;
  let fixture: ComponentFixture<SetupOrgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupOrgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
