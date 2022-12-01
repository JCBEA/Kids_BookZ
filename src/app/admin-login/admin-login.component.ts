import { Component, OnInit } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, linkWithRedirect, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Database, set, ref, update } from '@angular/fire/database';
import { Router } from '@angular/router';
import { routingComponent } from '../app-routing.module'; 


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
 
  

  constructor(public auth: Auth, public database: Database,
    private route: Router) {

  }

  ngOnInit(): void {
  }

   registerUser(value: any) {
  signInWithEmailAndPassword(this.auth, value.email, value.password)
  .then((userCredential)=>{
    const user = userCredential.user;
    const date = new Date();
    update(ref(this.database, 'users/' + user.uid),{
      last_login: date
    });
    alert('Login Successful --Hi! Admin--')
    this.route.navigate(['/admin-page'])

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    alert(errorMessage)
  });
  }
  }


  




