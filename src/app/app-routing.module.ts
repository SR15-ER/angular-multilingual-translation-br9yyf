import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoComponent } from './components/todo/todo.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { AuthGuardService } from './services/auth-guard.service';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'add',
    component: TodoFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'list',
    component: TodoListComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'favorite',
    component: TodoListComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'user-list',
    component: UserListComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'user-details',
    component: UserDetailsComponent,
    canActivate: [AuthGuardService],
  },
  { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
