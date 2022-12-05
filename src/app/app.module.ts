import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { AdminLoginComponent } from './admin-login/admin-login.component';

import { provideAuth,getAuth } from '@angular/fire/auth';
import { AdminPageComponent } from './admin-page/admin-page.component';

import { DashboardContentComponent } from './dashboard-content/dashboard-content.component';
import { UserDirectComponent } from './user-direct/user-direct.component';

import { AboutUsComponent } from './about-us/about-us.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { BooksComponent } from './Books/Books.component';
import { AddBookComponent } from './Books/addBook/AddBook.component';
import { BookListComponent } from './Books/Book-list/Book-list.component';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';

import {NgConfirmModule} from 'ng-confirm-box';

  



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    AdminLoginComponent,
    AdminPageComponent,
    DashboardContentComponent,
    UserDirectComponent,
    AboutUsComponent,
    BooksComponent,
    AddBookComponent,
    BookListComponent,
    AdminSidenavComponent,
    DeleteBookComponent,
    
  ],
  imports: [
   NgConfirmModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment. firebase),
    AngularFireStorageModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
    provideAuth(() => getAuth()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
