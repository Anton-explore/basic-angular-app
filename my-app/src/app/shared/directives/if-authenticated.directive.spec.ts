import { Component, TemplateRef, ViewContainerRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfAuthenticatedDirective } from './if-authenticated.directive';
import { AuthService } from '../services/auth.service';

@Component({
  template: `
    <ng-template [appIfAuthenticated]="condition">
      <div id="content">Content</div>
    </ng-template>
  `,
})
class TestComponent {
  condition!: boolean;
  constructor() {}
}

describe('IfAuthenticatedDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let authService: AuthService;
  let templateRef: TemplateRef<any>;
  let viewContainer: ViewContainerRef;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IfAuthenticatedDirective, TestComponent],
      providers: [AuthService],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    templateRef =
      fixture.debugElement.nativeElement.querySelector('ng-template');
    viewContainer = {
      createEmbeddedView: jasmine.createSpy(),
      clear: jasmine.createSpy(),
    } as any;
    fixture.detectChanges();
  });

  it('should create the view when the condition is true', () => {
    component.condition = true;
    fixture.detectChanges();

    expect(viewContainer.createEmbeddedView).toHaveBeenCalled();
    expect(viewContainer.clear).not.toHaveBeenCalled();
  });

  it('should clear the view when the condition changes from true to false', () => {
    component.condition = true;
    fixture.detectChanges();

    component.condition = false;
    fixture.detectChanges();

    expect(viewContainer.createEmbeddedView).toHaveBeenCalled();
    expect(viewContainer.clear).toHaveBeenCalled();
  });

  it('should create the view when the condition changes from false to true', () => {
    component.condition = false;
    fixture.detectChanges();

    component.condition = true;
    fixture.detectChanges();

    expect(viewContainer.createEmbeddedView).toHaveBeenCalled();
    expect(viewContainer.clear).toHaveBeenCalled();
  });

  it('should update the view when loginEvent is triggered and isAuthenticated is true', () => {
    component.condition = false;
    fixture.detectChanges();

    spyOn(authService, 'isAuthenticated').and.returnValue(true);
    authService.loginEvent.next();

    expect(viewContainer.createEmbeddedView).toHaveBeenCalled();
    expect(viewContainer.clear).not.toHaveBeenCalled();
  });

  it('should update the view when loginEvent is triggered and isAuthenticated is false', () => {
    component.condition = true;
    fixture.detectChanges();

    spyOn(authService, 'isAuthenticated').and.returnValue(false);
    authService.loginEvent.next();

    expect(viewContainer.createEmbeddedView).not.toHaveBeenCalled();
    expect(viewContainer.clear).toHaveBeenCalled();
  });
});
