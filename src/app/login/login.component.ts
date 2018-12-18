import { Component, OnInit } from '@angular/core';
import { MzModalService } from 'ngx-materialize';

import { LoadingModalComponent } from './../shared/loading-modal/loading-modal.component';

import { ViacepService } from './../shared/viacep.service';
import { StatesService } from '../states/states.service';
import { States } from '../states/States';
import { Users } from './../users/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private isTabLogin: boolean;
  public states: Array<States>;
  public user: Users;

  constructor(
    private statesService: StatesService,
    private viacep: ViacepService,
    private modalService: MzModalService,
  ) { }

  ngOnInit() {
    this.isTabLogin = true;
    this.user = new Users();
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

  public searchAddress(zipcode: string) {
    const modal = this.modalService.open(LoadingModalComponent);
    this.viacep.getAddress(zipcode).then((viacep) => {
      this.user.address.city = viacep.localidade;
      this.user.address.publicplace = viacep.logradouro;
      this.user.address.neighborhood = viacep.bairro;
      this.user.address.state.id = this.searchStates(viacep.uf).id;
      modal.instance.modalComponent.closeModal();
    });
  }

  private searchStates(stateInicials: string): States {
    return this.states.filter(state => state.initials === stateInicials)[0];
  }

}
