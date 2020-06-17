import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePagePasswordPageComponent } from './change-password-page.component';

describe('ChangePagePasswordPageComponent', () => {
  let component: ChangePagePasswordPageComponent;
  let fixture: ComponentFixture<ChangePagePasswordPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePagePasswordPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePagePasswordPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
