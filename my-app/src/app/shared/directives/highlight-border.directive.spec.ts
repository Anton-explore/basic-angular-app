import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightBorderDirective } from './highlight-border.directive';
import { Component, DebugElement, ElementRef } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: `<li [appHighlightBorder]="freshCourseDate">
      Green highlighted Course
    </li>
    <li [appHighlightBorder]="futureCourseDate">Blue highlighted Course</li>
    <li appHighlightBorder>Default Course</li>
    <li>No highlight</li>`,
})
class TestComponent {
  freshCourseDate: string;
  futureCourseDate: string;

  constructor() {
    const today = new Date();
    const pastDate = new Date();
    pastDate.setDate(today.getDate() - 10);
    const futureDate = new Date();
    futureDate.setDate(today.getDate() + 1);
    this.freshCourseDate = pastDate.toString();
    this.futureCourseDate = futureDate.toString();
  }
}

describe('HighlightBorderDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let withDir: DebugElement[];
  let noDir: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HighlightBorderDirective, TestComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();

    withDir = fixture.debugElement.queryAll(
      By.directive(HighlightBorderDirective)
    );
    noDir = fixture.debugElement.query(By.css('li:not([appHighlight])'));
  });

  it('should create an instance', () => {
    const directive = new HighlightBorderDirective(new ElementRef('test'));
    expect(directive).toBeTruthy();
  });

  describe('color highlighting', () => {
    it('should have 3 highlighted elements', () => {
      expect(withDir.length).toBe(3);
    });

    it('should colored element border to "green" if course created less than 14 day before actual date', () => {
      const borderColor = withDir[0].nativeElement.style.borderColor;
      expect(borderColor).toBe('green');
    });

    it('should colored element border to "blue" if course creation date in future', () => {
      const borderColor = withDir[1].nativeElement.style.borderColor;
      expect(borderColor).toBe('blue');
    });
  });

  describe('scaling elements on hovering', () => {
    it('should scale element', () => {
      const el = withDir[0].nativeElement as HTMLElement;
      el.dispatchEvent(new Event('mouseenter'));
      fixture.detectChanges();
      let scale = el.style.transform;
      expect(scale).toBe('scale(1.02)');

      el.dispatchEvent(new Event('mouseleave'));
      fixture.detectChanges();
      scale = el.style.transform;
      expect(scale).toBe('scale(1)');
    });
  });

  it('tag without directive should not have a customProperty', () => {
    expect(noDir.properties['customProperty']).toBeUndefined();
  });
});
