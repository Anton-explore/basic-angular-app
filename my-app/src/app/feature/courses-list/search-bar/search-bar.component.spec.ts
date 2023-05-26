import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarComponent } from './search-bar.component';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have placeholder and buttons text correctly', () => {
    expect(component.addText).toContain('Add course');
    expect(component.searchText).toContain('Search');
    expect(component.placeholder).toContain('Type to search');
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
