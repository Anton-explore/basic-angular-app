import { Component } from '@angular/core';
import { BUTTONS_TEXT, INPUTS_TEXT } from 'src/app/utils/mock-items';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  placeholder: string = INPUTS_TEXT.SRCH;
  addText: string = BUTTONS_TEXT.ADD;
  searchText: string = BUTTONS_TEXT.SRCH;
  inputValue!: string;

  onSearch(searchInput: HTMLInputElement): void {
    this.inputValue = searchInput.value;
    console.log('Search value:', searchInput.value);
    searchInput.value = '';
  }

  onAddingCourse(): void {
    console.log('Adding course');
  }
}
