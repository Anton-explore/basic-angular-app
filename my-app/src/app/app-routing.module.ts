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
        path: 'new',
        component: AddCourseComponent,
        // canActivate: [AuthGuard],
        data: {
          breadcrumb: 'Courses / New',
        },
      },
      {
        path: ':id',
        component: AddCourseComponent,
        // canActivate: [AuthGuard],
        data: {
          breadcrumb: 'Courses / Edit course',
        },
      },
      {
        path: '',
        component: CoursesListComponent,
        data: {
          breadcrumb: 'Courses',
        },
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

// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from './feature/auth.guard';

// const routes: Routes = [
//   { path: 'login', loadChildren: () => import('./feature/login/login.module').then(m => m.LoginModule) },
//   {
//     path: 'courses',
//     canActivate: [AuthGuard],
//     children: [
//       {
//         path: 'new',
//         loadChildren: () => import('./feature/add-course/add-course.module').then(m => m.AddCourseModule),
//         data: {
//           breadcrumb: 'Courses / New',
//         },
//       },
//       {
//         path: ':id',
//         loadChildren: () => import('./feature/add-course/add-course.module').then(m => m.AddCourseModule),
//         data: {
//           breadcrumb: 'Courses / Edit course',
//         },
//       },
//       {
//         path: '',
//         loadChildren: () => import('./feature/courses-list/courses-list.module').then(m => m.CoursesListModule),
//         data: {
//           breadcrumb: 'Courses',
//         },
//       },
//     ],
//   },
//   { path: '', redirectTo: '/courses', pathMatch: 'full' },
//   {
//     path: 'not-found',
//     loadChildren: () => import('./shared/not-found/not-found.module').then(m => m.NotFoundModule),
//     canActivate: [AuthGuard],
//     data: {
//       breadcrumb: 'Page not found!',
//     },
//   },
//   { path: '**', redirectTo: '/not-found' },
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {}
