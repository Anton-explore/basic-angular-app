import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAuthorsComponent } from './course-authors.component';
import { FormsModule } from '@angular/forms';

describe('CourseAuthorsComponent', () => {
  let component: CourseAuthorsComponent;
  let fixture: ComponentFixture<CourseAuthorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseAuthorsComponent],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
