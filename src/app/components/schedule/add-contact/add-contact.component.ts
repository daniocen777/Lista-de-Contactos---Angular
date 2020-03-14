import { Component, OnInit } from "@angular/core";
import { Contact } from "src/app/interfaces/contact";
import { ContactService } from "src/app/services/contact.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-contact",
  templateUrl: "./add-contact.component.html",
  styleUrls: ["./add-contact.component.css"]
})
export class AddContactComponent implements OnInit {
  public contact: Contact;

  constructor(private contactService: ContactService, private route: Router) {
    this.contact = {
      name: "",
      surname: "",
      description: "",
      sex: "Hombre",
      email: "",
      telephone: "",
      company: ""
    };
  }

  ngOnInit() {}

  addContact() {
    this.contactService.addContact(this.contact);
    this.route.navigate(["/list-contacts"]);
  }
}
