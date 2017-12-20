import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  user = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConf: '',
    streetAddress: '',
    apt: '',
    city: '',
    state: '',
    lucky: false
  };
  // users = []
  onSubmit(){
    // console.log("onSubmit()");
    console.log(this.user);
  };
  // API(this.user);
  // this.users.push(this.user);
  // this.user = {
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   password: '',
  //   passwordConf: '',
  //   streetAddress: '',
  //   apt: '',
  //   city: '',
  //   state: '',
  //   lucky: false,
  // }
}
