import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCreationDateComponent } from './course-creation-date.component';
import { FormsModule } from '@angular/forms';

describe('CourseCreationDateComponent', () => {
  let component: CourseCreationDateComponent;
  let fixture: ComponentFixture<CourseCreationDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseCreationDateComponent],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCreationDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
