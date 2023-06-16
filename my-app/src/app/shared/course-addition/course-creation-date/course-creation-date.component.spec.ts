import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCreationDateComponent } from './course-creation-date.component';

describe('CourseCreationDateComponent', () => {
  let component: CourseCreationDateComponent;
  let fixture: ComponentFixture<CourseCreationDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseCreationDateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCreationDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
