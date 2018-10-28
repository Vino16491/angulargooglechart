import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ChartboardComponent } from "./chartboard/chartboard.component";

const routes: Routes = [
  { path: "", redirectTo: "/chartboard", pathMatch: "full"},
  { path: "chartboard", component: ChartboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
