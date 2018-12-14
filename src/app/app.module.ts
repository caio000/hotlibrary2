// Módulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';
import { HttpModule } from '@angular/http';

// Componentes
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { LoginComponent } from './login/login.component';

// Serviços
import { StatesService } from './states/states.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    AppRoutingModule,
    HttpModule,
    MaterialModule,
    BrowserModule
  ],
  providers: [
    StatesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
