import { Component, OnInit } from '@angular/core';

import { MzModalService } from 'ngx-materialize';

import { LoadingModalComponent } from './../../shared/loading-modal/loading-modal.component';

import { StatesService } from './../../states/states.service';
import { ViacepService } from './../../shared/viacep.service';

import { Users } from './../users';
import { States } from './../../states/states';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  public user: Users;
  public states: Array<States>;

  constructor(
    private modalService: MzModalService,
    private statesService: StatesService,
    private viacepService: ViacepService,
  ) { }

  ngOnInit() {
    this.user = new Users;
    this.statesService.getStates().then(states => this.states = states);
  }

  searchAddress(zipcode: string): void {
    const loadingModal = this.modalService.open(LoadingModalComponent).instance;
    this.viacepService.getAddress(zipcode).then(viacep => {
      this.user.address.publicplace = viacep.logradouro;
      this.user.address.neighborhood = viacep.bairro;
      this.user.address.city = viacep.localidade;
      this.user.address.state = this.searchState(viacep.uf);
      loadingModal.modalComponent.closeModal();
    });
  }

  searchState(initials: string): States {
    return this.states.filter(state => state.initials === initials)[0];
  }

}
