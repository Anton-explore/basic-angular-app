import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ItemContext } from 'src/app/utils/datatypes';

@Directive({
  selector: '[appIfAuthenticated]',
})
export class IfAuthenticatedDirective<T> implements OnInit {
  private hasView = false;
  constructor(
    private authService: AuthService,
    private templateRef: TemplateRef<ItemContext<T>>,
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

// import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
// import { AuthService } from '../services/auth.service';
// import { ItemContext } from 'src/app/utils/datatypes';

// @Directive({
//   selector: '[appIfAuthenticated]',
// })
// export class IfAuthenticatedDirective<T> {
//   private isAuthenticated = false;
//   private condition = false;

//   constructor(
//     private templateRef: TemplateRef<ItemContext<T>>,
//     private viewContainer: ViewContainerRef,
//     private authService: AuthService
//   ) {
//     this.authService.loginEvent.subscribe(() => {
//       this.isAuthenticated = this.authService.isAuthenticated();
//       this.handleDisplay();
//     });
//   }

//   @Input() set appIfAuthenticated(condition: boolean) {
//     this.condition = condition;
//     this.handleDisplay();
//   }

//   handleDisplay() {
//     if (this.condition && this.isAuthenticated) {
//       this.viewContainer.createEmbeddedView(this.templateRef);
//     } else {
//       this.viewContainer.clear();
//     }
//   }
// }
