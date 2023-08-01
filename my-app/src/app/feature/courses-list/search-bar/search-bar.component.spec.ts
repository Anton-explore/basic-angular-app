import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SearchBarComponent } from './search-bar.component';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockActivatedRoute: jasmine.SpyObj<ActivatedRoute>;

  beforeEach(async () => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    const activatedRouteSpy = jasmine.createSpyObj('ActivatedRoute', ['']);

    await TestBed.configureTestingModule({
      declarations: [SearchBarComponent],
      imports: [FormsModule, FontAwesomeModule],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: ActivatedRoute, useValue: activatedRouteSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mockRouter = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    mockActivatedRoute = TestBed.inject(
      ActivatedRoute
    ) as jasmine.SpyObj<ActivatedRoute>;
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

    spyOn(component.searchStarts, 'emit');
    // component.onSearch(inputValue);
    component.onSearchInput();
    fixture.detectChanges();

    expect(component.searchStarts.emit).toHaveBeenCalledWith(inputValue);
  });

  it('should emit an event when inputValue property is empty', () => {
    const inputValue = '';

    component.inputValue = inputValue;
    spyOn(component.searchStarts, 'emit');
    component.onSearch(inputValue);

    fixture.detectChanges();
    expect(component.searchStarts.emit).toHaveBeenCalledWith(inputValue);
  });

  it('should not emit searchStarts event on invalid search input', () => {
    const value = 'ab';
    spyOn(component.searchStarts, 'emit');
    component.onSearch(value);
    expect(component.searchStarts.emit).not.toHaveBeenCalled();
  });

  it('should emit event when onAddingCourse method is called', () => {
    spyOn(component.addingCourse, 'emit');

    component.onAddingCourse();
    expect(component.addingCourse.emit).toHaveBeenCalled();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['new'], {
      relativeTo: mockActivatedRoute,
    });
  });
});
