import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    authInfo$: any;

  constructor(private fireauth: AngularFireAuth, private router: Router) {}

    login(email : string, password : string){
    this.fireauth.signInWithEmailAndPassword(email,password).then( (res) =>{
    localStorage.setItem('token','true');

    if(res.user?.emailVerified==true){
      this.router.navigate(['/dashboard'])
    }
    else{
      this.router.navigate(['/verify-email']);
    }
    this.router.navigate(['/home']);
   }, err => {
    alert('Something went wrong');
    this.router.navigate(['/login'])

   })
}

signup(email : string, password: string): void{
  this.fireauth.createUserWithEmailAndPassword(email,password).then ( (res) => {
   alert('Sing Up Successful')
    
   this.emailVerify(res.user)
  }, err => {
    alert(err.message);
    this.router.navigate(['/signup']);
  })
}

logout(){
  this.fireauth.signOut().then(() => {
  localStorage.removeItem('token');
  this.router.navigate(['/login']);
  }, err => {
    alert(err.message);
  })
}

changePassword(email:string){
  this.fireauth.sendPasswordResetEmail(email).then(()=>{
    this.router.navigate(['/verify-email']);
  },err=>{
    alert(err.message)
  })
}

emailVerify(user:any){
  console.log(user)
  user.sendEmailVerification().then((user:any)=>{
    this.router.navigate(['/verify-email'])
  },(err:any)=>{
    alert("Somethings went wrong cannot send mail to your email!")
  })

}


  }
