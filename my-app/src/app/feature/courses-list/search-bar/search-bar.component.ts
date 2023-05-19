import { Component } from '@angular/core';
import { BUTTONS_TEXT, INPUTS_TEXT } from 'src/app/utils/mock-items';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  placeholder = INPUTS_TEXT.SRCH;
  addText = BUTTONS_TEXT.ADD;
  searchText = BUTTONS_TEXT.SRCH;
}
