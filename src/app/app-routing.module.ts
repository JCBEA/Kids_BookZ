import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminPageComponent } from './admin-page/admin-page.component';

import { UserDirectComponent } from './user-direct/user-direct.component';

import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

import { BooksComponent } from './Books/Books.component';
import { AddBookComponent } from './Books/addBook/AddBook.component';
import { BookListComponent } from './Books/Book-list/Book-list.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { UpdatePassComponent } from './update-pass/update-pass.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { WebCommentsComponent } from './web-comments/web-comments.component';


import { CategoryFableComponent } from './Books/category-fable/category-fable.component';
import { DonateComponent } from './donate/donate.component';
import { VtoonsComponent } from './vtoons/vtoons.component';

const routes: Routes = [
  { path: '', redirectTo: 'user-direct', pathMatch: 'full' },
  {path:'Books', component: BooksComponent,children:[
    {path:'upload', component: AddBookComponent},
    {path:'list', component: BookListComponent},
    {path:'fable', component: CategoryFableComponent},
  ]},

  {path: 'dashboard', component: DashboardComponent},
  {path: 'admin-login', component: AdminLoginComponent},
  {path: 'admin-page', component: AdminPageComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'update-pass', component: UpdatePassComponent},
  {path: 'verify-email', component: VerifyEmailComponent},
  

  { path:'user-direct', component: UserDirectComponent},
  { path: '',redirectTo:'user-direct', pathMatch:'full'},
  { path:'comments', component: WebCommentsComponent},

  {path:'user-direct', component: UserDirectComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'delete-book', component: DeleteBookComponent},
  {path: 'donate', component:DonateComponent},
  {path: 'toons', component:VtoonsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export const routingComponent = [DashboardComponent, AdminLoginComponent, AdminPageComponent, UserDirectComponent, ContactUsComponent,UpdatePassComponent]


