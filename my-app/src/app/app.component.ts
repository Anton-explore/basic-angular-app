import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { UserLoginType } from './utils/datatypes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';

  constructor(private authService: AuthService) {
    const isAuthenticated: boolean = this.authService.isAuthenticated();
    if (isAuthenticated) {
      const user: UserLoginType = { email: 'fake', password: '1234' };
      this.authService.login(user.email, user.password);
    }
  }
}
