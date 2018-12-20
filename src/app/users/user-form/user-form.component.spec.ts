import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './../../shared/material.module';

import { StatesService } from './../../states/states.service';
import { ViacepService } from './../../shared/viacep.service';

import { UserFormComponent } from './user-form.component';

describe('UserFormComponent', () => {
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule, FormsModule, HttpModule ],
      providers: [ StatesService, ViacepService ],
      declarations: [ UserFormComponent ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(UserFormComponent);
      component = fixture.componentInstance;
    });
  }));

  /*
  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  */

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a input to user name', () => {
    let element = fixture.nativeElement.querySelector('input[name=user-name]');
    expect(element).not.toBeNull();
  });

  it('should have a input to user email', () => {
    const element = fixture.nativeElement.querySelector('input[name=user-email]');
    expect(element).not.toBeNull();
  });

  it('should ahve a input to user address zipcode', () => {
    const element = fixture.nativeElement.querySelector('input[name=user-address-zipcode]');
    expect(element).not.toBeNull();
  });

  it('should have a input to user address public place',() => {
    const query = 'input[name=user-address-publicplace]';
    const element = fixture.nativeElement.querySelector(query);
    expect(element).not.toBeNull();
  });

  it('should have input to user address neighborhood', () => {
    const query = 'input[name=user-address-neighborhood]';
    const element = fixture.nativeElement.querySelector(query);
    expect(element).not.toBeNull();
  });

  it('should have select to states', () => {
    const query = 'select[name=user-address-state]';
    const element = fixture.nativeElement.querySelector(query);
    expect(element).not.toBeNull();
  });

  it('should have input to user address city', () => {
    const query = 'input[name=user-address-city]';
    const element = fixture.nativeElement.querySelector(query);
    expect(element).not.toBeNull();
  });

  it('should have input to user address number', () => {
    const query = 'input[name=user-address-number]';
    const element = fixture.nativeElement.querySelector(query);
    expect(element).not.toBeNull();
  });

  it('should have button to create a user', () => {
    const query = 'button[name=btn-registration]';
    const element = fixture.nativeElement.querySelector(query);
    expect(element).not.toBeNull();
  });
});
