import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MzModalService, MzInjectionService } from 'ngx-materialize';

// Módulos
import { AppRoutingModule } from './app.routing.module';

// Componentes
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { LoginComponent } from './login/login.component';
import { LoadingModalComponent } from './shared/loading-modal/loading-modal.component';
import { UserFormComponent } from './users/user-form/user-form.component';

// Serviços
import { StatesService } from './states/states.service';
import { ViacepService } from './shared/viacep.service';


@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    LoadingModalComponent,
    LoginComponent
  ],
  imports: [
    AppRoutingModule,
    HttpModule,
    FormsModule,
    MaterialModule,
    BrowserModule
  ],
  entryComponents: [
    LoadingModalComponent
  ],
  providers: [
    MzInjectionService,
    MzModalService,
    StatesService,
    ViacepService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
