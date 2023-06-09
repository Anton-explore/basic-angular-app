import { Component, EventEmitter, Output } from '@angular/core';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
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
  addIcon = faCirclePlus;
  inputValue!: string;
  @Output() searchStarts: EventEmitter<string> = new EventEmitter<string>();

  onSearch(): void {
    this.searchStarts.emit(this.inputValue);
  }
  clearInput() {
    if (this.inputValue === '') {
      this.searchStarts.emit(this.inputValue);
    }
  }

  onAddingCourse(): void {
    console.log('Adding course');
  }
}
