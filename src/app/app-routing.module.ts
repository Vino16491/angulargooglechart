import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ChartboardComponent } from "./chartboard/chartboard.component";
import { ChartJsComponent } from "./chart-js/chart-js.component";

const routes: Routes = [
  { path: "", redirectTo: "/chartboard", pathMatch: "full" },
  { path: "chartboard", component: ChartboardComponent },
  { path: "chartjs", component: ChartJsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
