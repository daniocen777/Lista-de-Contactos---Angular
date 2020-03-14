import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddContactComponent } from "./components/schedule/add-contact/add-contact.component";
import { ListContactComponent } from "./components/schedule/list-contact/list-contact.component";

const routes: Routes = [
  { path: "add-contact", component: AddContactComponent },
  { path: "list-contacts", component: ListContactComponent },
  { path: "**", pathMatch: "full", redirectTo: "list-contacts" }
];

@NgModule({
  // { useHash: true } => evita que se recargue la página (#)
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
