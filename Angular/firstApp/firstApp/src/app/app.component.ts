import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  x: String = "score";
  y: String = "dienda";
  z: number = 44.32;
  user = {
    firstName: "darth",
    lastName: "maul"
  };
  today = new Date();
  stooPArray = [9, 33, "DN", 33, 1];
  color: String = "blue";
  switch: Boolean = true;
  i: number = 0;
  heads = [
    "Email", "Importance", "Subject", "Content"
  ];
  emails = [
    {email: "bill@gates.com", importance: "High", subject: "New Windows", content: "Windows XI will launch in year 2100"},
    {email: "ada@lovelace.com", importance: "High", subject: "Programming", content: "Enchantress of Numbers"},
    {email: "john@cermack.com", importance: "Low", subject: "Updated Algo", content: "New algorithm for shadow volumes"},
    {email: "gobe@newel.com", importance: "Low", subject: "HL3!", content: "Just kidding..."},
  ];

  arrEmails = [
    ["bill@gates.com", "High", "New Windows", "Windows XI will launch in year 2100"],
    ["ada@lovelace.com", "High", "Programming", "Enchantress of Numbers"],
    ["john@cermack.com", "Low", "Updated Algo", "New algorithm for shadow volumes"],
    ["gobe@newel.com", "Low", "HL3!", "Just kidding..."],
  ];
}
