import { Component, OnInit } from '@angular/core';

import { MzBaseModal, MzModalComponent } from 'ngx-materialize';


@Component({
  selector: 'app-loading-modal',
  templateUrl: './loading-modal.component.html',
  styleUrls: ['./loading-modal.component.css']
})
export class LoadingModalComponent extends MzBaseModal implements OnInit {

  constructor() { super() }

  ngOnInit() {

  }

}
