import { Component, OnInit } from '@angular/core';
import { Database, ref, set} from '@angular/fire/database';
import { Auth, createUserWithEmailAndPassword, linkWithRedirect, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(public auth: Auth, public database: Database,
    public route:Router) {
  }
  ngOnInit(): void {
  }



  registerUser(value: any) {
    //create data
    set(ref(this.database, 'Books/' + value.title), {
     title: value.title,
      story: value.story,
       published : value.published,
       author: value.author
     }); 
     alert('user created!');
}
signOut() {
  return this.auth.signOut().then(() => {
    window.alert('Logged out!');
    this.route.navigate(['/admin-login'])
  });
}
}
