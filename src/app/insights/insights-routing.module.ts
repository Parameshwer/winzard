import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TalentInsightsComponent } from "./talent-insights/talent-insights.component";

const routes: Routes = [
  {
    path: "talentManagement",
    component: TalentInsightsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsightsRoutingModule {}
