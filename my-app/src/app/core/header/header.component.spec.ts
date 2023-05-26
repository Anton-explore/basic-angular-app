import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule, AppRoutingModule, SharedModule],
      declarations: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initial have button with "Login" text and false status of logging', () => {
    expect(component.buttonText).toBe('Login');
    expect(component.isLoggedIn).toBeFalse();
  });

  it('should change button text and logging status when onLogging method is called', () => {
    component.onLogging();

    expect(component.buttonText).toBe('Log out');
    expect(component.isLoggedIn).toBeTrue();

    component.onLogging();
    expect(component.buttonText).toBe('Login');
    expect(component.isLoggedIn).toBeFalse();
  });

  it('should log "Logging in.." when button with text "Login" is clicked', () => {
    spyOn(console, 'log');
    expect(component.buttonText).toBe('Login');
    expect(component.isLoggedIn).toBeFalse();

    component.onLogging();

    expect(console.log).toHaveBeenCalledWith('Logging in..');
  });

  it('should log "Logging off.." when button with text "Log out" is clicked', () => {
    spyOn(console, 'log');
    component.buttonText = 'Log out';
    component.isLoggedIn = true;
    component.onLogging();
    expect(console.log).toHaveBeenCalledWith('Logging off..');
  });
});
