import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminPageComponent } from './admin-page/admin-page.component';

import { UserDirectComponent } from './user-direct/user-direct.component';

import { AboutUsComponent } from './about-us/about-us.component';
import { BooksComponent } from './Books/Books.component';
import { AddBookComponent } from './Books/addBook/AddBook.component';
import { BookListComponent } from './Books/Book-list/Book-list.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';





const routes: Routes = [
  { path: '', redirectTo: 'user-direct', pathMatch: 'full' },
  {path:'Books', component: BooksComponent,children:[
    {path:'upload', component: AddBookComponent},
    {path:'list', component: BookListComponent},
  ]},

  {path: 'dashboard', component: DashboardComponent},
  {path: 'admin-login', component: AdminLoginComponent},
  {path: 'admin-page', component: AdminPageComponent},
  {path:'user-direct', component: UserDirectComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'delete-book', component: DeleteBookComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent = []
