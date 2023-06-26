import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudencrudComponent } from './components/studentcrud/studentcrud.component';
import { literalMap } from '@angular/compiler';
import { ListStudentsComponent } from './components/list-students/list-students.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'home',
    component: StudencrudComponent
  },
  {
    path:'listar',
    component: ListStudentsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
