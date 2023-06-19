import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDescriptionComponent } from './course-description.component';
import { FormsModule } from '@angular/forms';

describe('CourseDescriptionComponent', () => {
  let component: CourseDescriptionComponent;
  let fixture: ComponentFixture<CourseDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseDescriptionComponent],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
