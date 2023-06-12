import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService) {}

  login() {
    if (this.email.trim() && this.password.trim()) {
      this.authService.login(this.email.trim(), this.password.trim());
      console.log('Logged in successfully');
    }
  }
}
