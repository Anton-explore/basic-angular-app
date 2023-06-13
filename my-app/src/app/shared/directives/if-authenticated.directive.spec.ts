import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfAuthenticatedDirective } from './if-authenticated.directive';
import { AuthService } from '../services/auth.service';
import { Subject } from 'rxjs';
// import { ItemContext } from 'src/app/utils/datatypes';

@Component({
  template: `
    <ng-template [appIfAuthenticated]="condition">
      <div id="content">Content</div>
    </ng-template>
  `,
})
class TestComponent {
  condition!: boolean;
}

describe('IfAuthenticatedDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let authService: AuthService;

  beforeEach(async () => {
    const authServiceStub = {
      loginEvent: new Subject(),
      isAuthenticated: () => true,
    };

    await TestBed.configureTestingModule({
      declarations: [TestComponent, IfAuthenticatedDirective],
      providers: [{ provide: AuthService, useValue: authServiceStub }],
    }).compileComponents();

    authService = TestBed.inject(AuthService);
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should not render the template when condition is false', () => {
    component.condition = false;
    fixture.detectChanges();
    expect(fixture.nativeElement.innerHTML).not.toContain('<div></div>');
  });

  it('should render the template when authService emits loginEvent and isAuthenticated is true', () => {
    authService.loginEvent.next();
    fixture.detectChanges();
    expect(fixture.nativeElement.innerHTML).toContain(
      '<div id="content">Content</div>'
    );
  });

  it('should not render the template when authService emits loginEvent and isAuthenticated is false', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(false);
    authService.loginEvent.next();
    fixture.detectChanges();
    expect(fixture.nativeElement.innerHTML).not.toContain('<div></div>');
  });
});
