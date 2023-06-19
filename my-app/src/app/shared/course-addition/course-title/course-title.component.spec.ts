import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTitleComponent } from './course-title.component';
import { FormsModule } from '@angular/forms';

describe('CourseTitleComponent', () => {
  let component: CourseTitleComponent;
  let fixture: ComponentFixture<CourseTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseTitleComponent],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
