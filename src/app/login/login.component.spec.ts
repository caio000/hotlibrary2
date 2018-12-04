import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
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
});
