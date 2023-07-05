import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { MainSectionComponent } from './core/main-section/main-section.component';
import { LoginComponent } from './feature/login/login.component';
import { AddCourseComponent } from './feature/add-course/add-course.component';
import { CoursesListComponent } from './feature/courses-list/courses-list.component';
import { AuthGuard } from './feature/auth.guard';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  // { path: 'home', component: MainSectionComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'courses/new',
    component: AddCourseComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'courses',
    component: CoursesListComponent,
    canActivate: [AuthGuard],
    data: {
      breadcrumb: 'Courses',
    },
    children: [
      {
        path: ':id',
        component: AddCourseComponent,
        canActivate: [AuthGuard],
        data: {
          breadcrumb: 'Edit course',
        },
      },
      {
        path: 'new',
        component: AddCourseComponent,
        canActivate: [AuthGuard],
        data: {
          breadcrumb: 'New',
        },
      },
    ],
  },
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
