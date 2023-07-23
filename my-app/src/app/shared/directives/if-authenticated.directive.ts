import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ItemContext } from 'src/app/utils/datatypes';

@Directive({
  selector: '[appIfAuthenticated]',
})
export class IfAuthenticatedDirective<T> {
  private isLoggedIn = false;
  private condition = false;

  constructor(
    private authService: AuthService,
    private templateRef: TemplateRef<ItemContext<T>>,
    private viewContainer: ViewContainerRef
  ) {
    // const token = localStorage.getItem('token');
    // this.isLoggedIn = !!token;
    // this.checkDisplay();
    this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
      this.checkDisplay();
    });
  }

  @Input() set appIfAuthenticated(condition: boolean) {
    this.condition = condition;
    this.checkDisplay();
  }

  checkDisplay() {
    if (this.condition && this.isLoggedIn) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  // ngOnInit() {
  //   this.authService.loginEvent.subscribe(() => {
  //     const isAuthenticated = this.authService.isAuthenticated();

  //     if (isAuthenticated && !this.hasView) {
  //       this.viewContainer.createEmbeddedView(this.templateRef);
  //       this.hasView = true;
  //     } else if (!isAuthenticated && this.hasView) {
  //       this.viewContainer.clear();
  //       this.hasView = false;
  //     }
  //   });
  // }
}
