import {
  Component,
  EventEmitter,
  Input,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-course-authors',
  templateUrl: './course-authors.component.html',
  styleUrls: ['./course-authors.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseAuthorsComponent {
  @Input() authors!: string[];
  @Output() authorsChange: EventEmitter<string[]> = new EventEmitter<
    string[]
  >();

  selectedAuthors: string[] = [];
  // filteredAuthors: string[] = [];

  onAuthorsChange() {
    // console.log(`authors: ${this.authors}, selected: ${this.selectedAuthors}`);
    this.authorsChange.emit(this.selectedAuthors);
  }

  // filterAuthors(e: Event) {
  //   const target = e.target as HTMLInputElement;
  //   const value = target.value;
  //   this.filteredAuthors = this.authors.filter(author =>
  //     author.toLowerCase().includes(value.toLowerCase())
  //   );
  // }
}
