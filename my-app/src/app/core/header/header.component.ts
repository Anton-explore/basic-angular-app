import { Component } from '@angular/core';

import { BUTTONS_TEXT } from 'src/app/utils/mock-items';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  buttonText: string = BUTTONS_TEXT.IN;
  isLoggedIn = false;
  user = 'User login';

  onLogging(): void {
    if (this.buttonText === BUTTONS_TEXT.IN) {
      this.buttonText = BUTTONS_TEXT.OUT;
      this.isLoggedIn = !this.isLoggedIn;
      console.log('Logging in..');
    } else {
      this.buttonText = BUTTONS_TEXT.IN;
      this.isLoggedIn = !this.isLoggedIn;
      console.log('Logging off..');
    }
  }
}
