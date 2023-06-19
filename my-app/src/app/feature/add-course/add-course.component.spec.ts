import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseComponent } from './add-course.component';
import { SharedModule } from 'src/app/shared/shared.module';

describe('AddCourseComponent', () => {
  let component: AddCourseComponent;
  let fixture: ComponentFixture<AddCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCourseComponent],
      imports: [SharedModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AddCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set duration', () => {
    const duration = 90;

    component.setDuration(duration);

    expect(component.duration).toEqual(duration);
  });

  it('should set release date', () => {
    const date = '2023-06-19';

    component.setDate(date);

    expect(component.releaseDate).toEqual(date);
  });

  it('should set course description', () => {
    const description = 'This is a course description';

    component.setDescr(description);

    expect(component.courseDescription).toEqual(description);
  });

  it('should set course title', () => {
    const title = 'Course Title';

    component.setTitle(title);

    expect(component.courseName).toEqual(title);
  });

  it('should set course authors', () => {
    const authors = ['Author 1', 'Author 2'];

    component.setAuthors(authors);

    expect(component.courseAuthors).toEqual(authors);
  });

  it('should emit cancelAddition event', () => {
    spyOn(component.cancelAddition, 'emit');

    component.onCanceling();

    expect(component.cancelAddition.emit).toHaveBeenCalled();
  });
});
