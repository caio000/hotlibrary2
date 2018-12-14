import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MzButtonModule,
  MzInputModule,
  MzSelectModule,
  MzValidationModule
} from 'ngx-materialize';

@NgModule({
  imports: [
    MzButtonModule,
    MzInputModule,
    MzSelectModule,
    MzValidationModule,
    BrowserAnimationsModule
  ],
  declarations: [],
  providers: [],
  exports: [
    MzButtonModule,
    MzInputModule,
    MzSelectModule,
    MzValidationModule,
    BrowserAnimationsModule
  ],
})
export class MaterialModule { }
