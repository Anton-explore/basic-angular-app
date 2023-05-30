import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TopRatedDirective } from './top-rated.directive';

@Component({
  template: `
    <div appTopRated [appTopRated]="isTopRated" class="app-course-card">
      <h3 class="app-course-card__title">Course Title</h3>
    </div>
  `,
})
class TestComponent {
  isTopRated?: boolean;
}

describe('TopRatedDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let directiveElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopRatedDirective, TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    directiveElement = fixture.debugElement.query(
      By.directive(TopRatedDirective)
    );
  });

  it('should apply "app-course-card__top-rated" class if if course is TopRated', () => {
    component.isTopRated = true;
    fixture.detectChanges();

    const element = directiveElement.nativeElement;
    expect(element.classList.contains('app-course-card__top-rated')).toBe(true);
  });

  it('should not apply custom class if course isn`t TopRated', () => {
    component.isTopRated = false;
    fixture.detectChanges();

    const element = directiveElement.nativeElement;
    expect(element.classList.contains('app-course-card__top-rated')).toBe(
      false
    );
  });

  it('should add "app-course-card__title__top-rated" class to the course title if course is TopRated', () => {
    component.isTopRated = true;
    fixture.detectChanges();

    const courseTitle = directiveElement.nativeElement.querySelector(
      '.app-course-card__title'
    );
    expect(
      courseTitle.classList.contains('app-course-card__title__top-rated')
    ).toBe(true);
  });

  it('should not add "app-course-card__title__top-rated" class to the course title if isTopRated is false', () => {
    component.isTopRated = false;
    fixture.detectChanges();

    const courseTitle = directiveElement.nativeElement.querySelector(
      '.app-course-card__title'
    );
    expect(
      courseTitle.classList.contains('app-course-card__title__top-rated')
    ).toBe(false);
  });
});
