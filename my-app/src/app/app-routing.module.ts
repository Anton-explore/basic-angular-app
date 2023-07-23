import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { MainSectionComponent } from './core/main-section/main-section.component';
import { LoginComponent } from './feature/login/login.component';
import { AddCourseComponent } from './feature/add-course/add-course.component';
import { CoursesListComponent } from './feature/courses-list/courses-list.component';
import { AuthGuard } from './feature/auth.guard';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'courses',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: CoursesListComponent,
      },
      {
        path: 'new',
        component: AddCourseComponent,
      },
      {
        path: ':id',
        component: AddCourseComponent,
      },
    ],
  },
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  {
    path: 'not-found',
    component: NotFoundComponent,
    canActivate: [AuthGuard],
    data: {
      breadcrumb: 'Page not found!',
    },
  },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
