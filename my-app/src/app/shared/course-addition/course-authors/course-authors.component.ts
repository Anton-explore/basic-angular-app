import {
  Component,
  EventEmitter,
  Input,
  Output,
  // ChangeDetectionStrategy,
  ElementRef,
  ViewChild,
  OnInit,
  OnDestroy,
  // inject,
} from '@angular/core';

import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';

import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';

import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';
import { CoursesService } from '../../services/courses.service';
// import { AuthorType } from 'src/app/utils/datatypes';
// import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-course-authors',
  templateUrl: './course-authors.component.html',
  styleUrls: ['./course-authors.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseAuthorsComponent implements OnInit, OnDestroy {
  @Input() courseAuthors!: string[];
  @Output() authorsChange: EventEmitter<string[]> = new EventEmitter<
    string[]
  >();

  separatorKeysCodes: number[] = [ENTER, COMMA];
  authorCtrl = new FormControl('');
  filteredAuthors: Observable<string[]>;
  // allAuthors!: string[];
  allAuthors$ = new BehaviorSubject<string[]>([]);
  private destroy$ = new Subject<void>();

  @ViewChild('authorInput') authorInput!: ElementRef<HTMLInputElement>;

  // announcer = inject(LiveAnnouncer);

  constructor(private coursesService: CoursesService) {
    this.filteredAuthors = this.authorCtrl.valueChanges.pipe(
      startWith(null),
      map(
        (author: string | null) =>
          author ? this._filter(author) : this.allAuthors$.getValue()
        // this.allAuthors
      )
    );
  }

  ngOnInit(): void {
    this.coursesService
      .getAuthors()
      .pipe(takeUntil(this.destroy$))
      .subscribe(authors => {
        this.allAuthors$.next(
          authors.map(author => `${author.name} ${author.lastName}`)
        );
        // this.allAuthors = authors.map(
        //   author => `${author.name} ${author.lastName}`
        // );
        // console.log(this.allAuthors);
        // this.authors = authors;
      });
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.courseAuthors.push(value);
      this.authorsChange.emit(this.courseAuthors);
    }

    event.chipInput?.clear();

    this.authorCtrl.setValue(null);
  }

  remove(author: string): void {
    const index = this.courseAuthors.indexOf(author);

    if (index >= 0) {
      this.courseAuthors.splice(index, 1);
      this.authorsChange.emit(this.courseAuthors);
      // this.announcer.announce(`Removed ${author}`);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.courseAuthors.push(event.option.viewValue);
    this.authorInput.nativeElement.value = '';
    this.authorCtrl.setValue(null);
    this.authorsChange.emit(this.courseAuthors);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allAuthors$
      .getValue()
      .filter(author => author.toLowerCase().includes(filterValue));

    // return this.allAuthors.filter(author =>
    //   author.toLowerCase().includes(filterValue)
    // );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // selectedAuthors: string[] = [];
  // filteredAuthors: string[] = [];

  // onAuthorsChange() {
  //   // console.log(`authors: ${this.authors}, selected: ${this.selectedAuthors}`);
  //   this.authorsChange.emit(this.selectedAuthors);
  // }

  // filterAuthors(e: Event) {
  //   const target = e.target as HTMLInputElement;
  //   const value = target.value;
  //   this.filteredAuthors = this.authors.filter(author =>
  //     author.toLowerCase().includes(value.toLowerCase())
  //   );
  // }
}
