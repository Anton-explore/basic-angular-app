import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarComponent } from './search-bar.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchBarComponent],
      imports: [FormsModule, FontAwesomeModule],
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

  it('should update the inputValue property and pass it into event when on onSearch method called', () => {
    const inputValue = 'example search';

    component.inputValue = inputValue;
    fixture.detectChanges();

    spyOn(component.searchStarts, 'emit');
    component.onSearch();

    expect(component.searchStarts.emit).toHaveBeenCalledWith(inputValue);
  });

  it('should emit an event when inputValue property is empty', () => {
    const inputValue = '';

    component.inputValue = inputValue;
    spyOn(component.searchStarts, 'emit');
    fixture.detectChanges();

    component.clearInput();
    expect(component.searchStarts.emit).toHaveBeenCalledWith(inputValue);
  });

  it('should emit event when onAddingCourse method is called', () => {
    spyOn(component.addingCourse, 'emit');
    component.onAddingCourse();
    expect(component.addingCourse.emit).toHaveBeenCalled();
  });
});
