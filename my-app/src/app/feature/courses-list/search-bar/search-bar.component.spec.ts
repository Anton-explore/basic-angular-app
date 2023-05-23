import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarComponent } from './search-bar.component';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchBarComponent],
      errorOnUnknownProperties: true,
      errorOnUnknownElements: true,
    }).compileComponents();

    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should view properties of placeholder and buttons correctly', () => {
    const addCourseButton = fixture.nativeElement.querySelector(
      '.app-button__add-course'
    );
    const searchButton = fixture.nativeElement.querySelector(
      '.app-button__search'
    );
    const searchInput =
      fixture.nativeElement.querySelector('.app-input__search');

    expect(addCourseButton.textContent).toContain('Add course');
    expect(searchButton.textContent).toContain('Search');
    expect(searchInput.getAttribute('placeholder')).toContain('Type to search');
  });

  it('should update the inputValue property and log the search value on onSearch method call', () => {
    const searchInput =
      fixture.nativeElement.querySelector('.app-input__search');
    const inputValue = 'example search';

    searchInput.value = inputValue;
    searchInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    spyOn(console, 'log');
    component.onSearch(searchInput);

    expect(component.inputValue).toBe(inputValue);
    expect(console.log).toHaveBeenCalledWith('Search value:', inputValue);
    expect(searchInput.value).toBe('');
  });

  it('should log "Adding course" when onAddingCourse method is called', () => {
    spyOn(console, 'log');
    component.onAddingCourse();
    expect(console.log).toHaveBeenCalledWith('Adding course');
  });
});
