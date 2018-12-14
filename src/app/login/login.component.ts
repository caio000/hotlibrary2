import { Component, OnInit } from '@angular/core';
import { StatesService } from '../states/states.service';
import { States } from '../states/States';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private isTabLogin: boolean;
  public states: Array<States>;

  constructor(
    private statesService: StatesService
  ) { }

  ngOnInit() {
    this.isTabLogin = true;
    this.statesService.getStates().then(response => {
      this.states = response;
    });
  }

  public login() {

  }

  public showTab(tab: string) {
    this.isTabLogin = tab === 'login' ? true : false;
  }

  public showLogin(): boolean {
    return this.isTabLogin;
  }

}
