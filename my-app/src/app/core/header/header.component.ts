import { Component } from '@angular/core';

import { BUTTONS_TEXT } from 'src/app/utils/mock-items';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  buttonText = BUTTONS_TEXT.OUT;
  user = 'User login';
}
