import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamWinRoutingModule } from './team-win-routing.module';
import { TeamWinComponent } from './team-win/team-win.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [TeamWinComponent],
  imports: [
    CommonModule,
    SharedModule,
    TeamWinRoutingModule
  ]
})
export class TeamWinModule { }
