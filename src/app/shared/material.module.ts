import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MzButtonModule,
  MzInputModule,
  MzModalModule,
  MzSelectModule,
  MzSpinnerModule,
  MzTabModule,
  MzValidationModule
} from 'ngx-materialize';
import { LoadingModalComponent } from './loading-modal/loading-modal.component';

@NgModule({
  imports: [
    MzButtonModule,
    MzInputModule,
    MzSelectModule,
    MzValidationModule,
    MzSpinnerModule,
    MzModalModule,
    MzTabModule,
    BrowserAnimationsModule
  ],
  declarations: [],
  providers: [],
  exports: [
    MzButtonModule,
    MzInputModule,
    MzSelectModule,
    MzValidationModule,
    MzSpinnerModule,
    MzModalModule,
    MzTabModule,
    BrowserAnimationsModule
  ],
})
export class MaterialModule { }
