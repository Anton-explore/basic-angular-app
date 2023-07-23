import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { FeatureModule } from './feature/feature.module';
import { MainSectionComponent } from './core/main-section/main-section.component';
import { SharedModule } from './shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoursesService } from './shared/services/courses.service';
import { AuthService } from './shared/services/auth.service';
import { AuthInterceptor } from './shared/services/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainSectionComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FeatureModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
  ],
  providers: [
    AuthService,
    CoursesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
