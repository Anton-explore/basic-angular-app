import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  @Output() addingCourse: EventEmitter<void> = new EventEmitter<void>();

  constructor(private router: Router, private route: ActivatedRoute) {}

  onSearch(): void {
    this.searchStarts.emit(this.inputValue);
  }
  clearInput() {
    if (this.inputValue === '') {
      this.searchStarts.emit(this.inputValue);
    }
  }

  onAddingCourse(): void {
    this.addingCourse.emit();
    // this.router.navigate(['/courses/new']);
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
