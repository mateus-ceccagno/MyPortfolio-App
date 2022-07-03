import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  public contacts = {
    title: "Meus Contatos ☎️",
    subtitle: "Entre em contato para projetos ou contratação",
    number: "(54) 9 9636-5099",
    email_address: "sk.mateus@hotmail.com"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
