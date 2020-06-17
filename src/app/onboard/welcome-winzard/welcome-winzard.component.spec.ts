import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeWinzardComponent } from './welcome-winzard.component';

describe('WelcomeWinzardComponent', () => {
  let component: WelcomeWinzardComponent;
  let fixture: ComponentFixture<WelcomeWinzardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeWinzardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeWinzardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
