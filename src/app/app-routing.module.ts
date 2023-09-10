import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: "login",
    loadChildren: ()=>
      import('./auth/auth.module').then(
        (m)=>m.AuthModule
      )
  },
  {
    path: "form",
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: ()=>
        import('./formBuilder/forms.module').then(
          (m)=>m.FormBuilderModule
        )
      },
      {
        path: '',
        loadChildren: ()=>
        import('./formAnswers/form-answers.module').then(
          (m)=>m.FormAnswersModule
        )
      }
    ]
  },
  {
    path: '',
    redirectTo: 'form/builder',
    pathMatch: 'full'
  },
  {
    path:'**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
