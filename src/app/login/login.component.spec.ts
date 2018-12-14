import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { MaterialModule } from './../shared/material.module';

import { LoginComponent } from './login.component';

import { StatesService } from './../states/states.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        MaterialModule,
        HttpModule,
      ],
      providers: [ StatesService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a input for email', () => {
    let element = fixture.nativeElement.querySelector('input[type=email]');
    expect(element).not.toBeNull();
  });

  it('should have a input for password', () => {
    let element = fixture.nativeElement.querySelector('input[type=password]');
    expect(element).not.toBeNull();
  });

  it('should have a button to login', () => {
    let element = fixture.nativeElement.querySelector('button[name=btnLogin]');
    expect(element).not.toBeNull();
  });

  it('should have a form to login', () => {
    let element = fixture.nativeElement.querySelector('form[name=formLogin]');
    expect(element).not.toBeNull();
  });

});
