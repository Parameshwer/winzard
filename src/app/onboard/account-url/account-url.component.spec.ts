import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountUrlComponent } from './account-url.component';

describe('AccountUrlComponent', () => {
  let component: AccountUrlComponent;
  let fixture: ComponentFixture<AccountUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountUrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
