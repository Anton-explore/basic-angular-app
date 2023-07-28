import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { BUTTONS_TEXT, INPUTS_TEXT } from 'src/app/utils/mock-items';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  placeholder: string = INPUTS_TEXT.SRCH;
  addText: string = BUTTONS_TEXT.ADD;
  searchText: string = BUTTONS_TEXT.SRCH;
  addIcon = faCirclePlus;
  inputValue!: string;
  @Output() searchStarts: EventEmitter<string> = new EventEmitter<string>();
  @Output() addingCourse: EventEmitter<void> = new EventEmitter<void>();

  private inputValueChanges: Subject<string> = new Subject<string>();

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.inputValueChanges
      .pipe(debounceTime(500))
      .subscribe(value => this.onSearch(value));
  }

  onSearchInput(): void {
    this.inputValueChanges.next(this.inputValue);
  }

  onSearch(value: string): void {
    if (value.length >= 3 || !value.length) {
      this.searchStarts.emit(this.inputValue);
    }
  }

  onAddingCourse(): void {
    this.addingCourse.emit();
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
