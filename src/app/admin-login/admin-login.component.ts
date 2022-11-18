import { Component, OnInit } from '@angular/core';
import { Database, set, ref, update, onValue } from '@angular/fire/database';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(public database: Database) { }

  ngOnInit(): void {
  }
  adminLogin(value:any){
    const starCountRef = ref(this.database, 'users' + value.id);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      if (data.username == value.username && data.password == value.password){
        alert('Nice')
      }
    });
  }

}
