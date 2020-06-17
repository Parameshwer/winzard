import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamWinComponent } from './team-win.component';

describe('TeamWinComponent', () => {
  let component: TeamWinComponent;
  let fixture: ComponentFixture<TeamWinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamWinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamWinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
