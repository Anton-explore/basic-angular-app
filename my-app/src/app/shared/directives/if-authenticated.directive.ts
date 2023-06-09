import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { AuthService } from '../services/auth.service';

@Directive({
  selector: '[appIfAuthenticated]',
})
export class IfAuthenticatedDirective implements OnInit {
  private hasView = false;
  constructor(
    private authService: AuthService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input() set appIfAuthenticated(condition: boolean) {
    if (condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (!condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }

  ngOnInit() {
    this.authService.loginEvent.subscribe(() => {
      const isAuthenticated = this.authService.isAuthenticated();

      if (isAuthenticated && !this.hasView) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.hasView = true;
      } else if (!isAuthenticated && this.hasView) {
        this.viewContainer.clear();
        this.hasView = false;
      }
    });
  }
}
