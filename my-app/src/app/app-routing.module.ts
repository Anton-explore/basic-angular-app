import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { MainSectionComponent } from './core/main-section/main-section.component';
import { LoginComponent } from './feature/login/login.component';
import { AddCourseComponent } from './feature/add-course/add-course.component';
import { CoursesListComponent } from './feature/courses-list/courses-list.component';
import { AuthGuard } from './feature/auth.guard';

const routes: Routes = [
  // { path: 'home', component: MainSectionComponent },
  { path: 'login', component: LoginComponent },
  {
    path: '/courses/new',
    component: AddCourseComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'courses',
    component: CoursesListComponent,
    canActivate: [AuthGuard],
  },
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  {
    path: '/courses:id',
    component: AddCourseComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
