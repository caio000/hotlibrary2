import { Component, OnInit } from '@angular/core';

import { Users } from './../users/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public isLoginTab: boolean;
  public user: Users;

  constructor() { }

  ngOnInit() {
    this.isLoginTab = true;
    this.user = new Users();
  }

  public login() {

  }

  public toggleTabs(): void {
    this.isLoginTab = !this.isLoginTab;
  }

}
