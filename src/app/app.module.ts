import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ScheduleComponent } from "./components/schedule/schedule.component";
import { AddContactComponent } from "./components/schedule/add-contact/add-contact.component";
import { ListContactComponent } from "./components/schedule/list-contact/list-contact.component";

import { FormsModule } from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";
import { CapitlizePipe } from './pipes/capitlize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    AddContactComponent,
    ListContactComponent,
    CapitlizePipe
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
