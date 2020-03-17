import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "akita-store-pagination",
    loadChildren: () =>
      import("./akita-store-pagination/akita-store-pagination.module").then(
        m => m.AkitaStorePaginationModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
