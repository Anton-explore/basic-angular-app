import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { LogoComponent } from './logo/logo.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CourseCardComponent } from './course-card/course-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainSectionComponent,
    CoursesListComponent,
    LogoComponent,
    BreadcrumbsComponent,
    SearchBarComponent,
    CourseCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
