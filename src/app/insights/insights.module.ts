import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsightsRoutingModule } from './insights-routing.module';
import { TalentInsightsComponent } from './talent-insights/talent-insights.component';
import { SharedModule } from '../shared/shared.module';
import { GoalInsightsComponent } from './goal-insights/goal-insights.component';


@NgModule({
  declarations: [TalentInsightsComponent, GoalInsightsComponent],
  imports: [
    CommonModule,
    SharedModule,
    InsightsRoutingModule
  ]
})
export class InsightsModule { }
