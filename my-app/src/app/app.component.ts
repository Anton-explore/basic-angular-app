import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';

  constructor(private authService: AuthService) {
    // @ts-ignore
    const isAuthenticated: string = this.authService.isAuthenticated();
    if (isAuthenticated) {
      const user: any = { email: 'fake', password: '1234' };
      this.authService.login(user.email, user.password);
    }
  }
}
