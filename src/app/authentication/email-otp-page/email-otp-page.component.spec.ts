import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailOtpPageComponent } from './email-otp-page.component';

describe('EmailOtpPageComponent', () => {
  let component: EmailOtpPageComponent;
  let fixture: ComponentFixture<EmailOtpPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailOtpPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailOtpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
