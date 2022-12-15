import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from "rxjs/operators";
import { ImageService } from 'src/app/shared/image.service';
import { Database, ref, set} from '@angular/fire/database';
import { Auth, createUserWithEmailAndPassword, linkWithRedirect, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-image',
  templateUrl: './AddBook.component.html',
  styleUrls: ['./AddBook.component.css']
})
export class AddBookComponent implements OnInit {
  imgSrc: string | undefined; 
selectedImage: any = null;
isSubmitted: boolean | undefined;
  

  formTemplate = new FormGroup({
    Title: new FormControl('', Validators.required),
    Story: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    category: new FormControl(''),
    imageUrl: new FormControl('', Validators.required)
  })

  constructor(private storage: AngularFireStorage, private service: ImageService, public auth: Auth, public database: Database,
    public route:Router) { }

  ngOnInit() {
    this.resetForm();
  }

  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    }
    else {
      this.imgSrc = '../../assets/images/image_placeholder.jpg';
      this.selectedImage = null;
    }
  }

  onSubmit(formValue: any) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      var filePath = `${formValue.category}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue['imageUrl'] = url;
            this.service.insertbookDetails(formValue);
            this.resetForm();
          })
        })
      ).subscribe();
      Swal.fire({    
        title: 'Published Successfuly',
        icon:'success',
        color: 'black',
        confirmButtonText: 'Done',
        position: 'top-right'
    })
    }
  }

  get formControls() {
    return this.formTemplate['controls'];
  }

  resetForm() {
    this.formTemplate.reset();
    this.formTemplate.setValue({
      author: '',
      Story: '',
      Title: '',
      imageUrl: '',
      category: 'Fable'
    });
    this.imgSrc = '../../assets/images/image_placeholder.jpg';
    this.selectedImage = null;
    this.isSubmitted = false;
  }

  signOut() {
    return this.auth.signOut().then(() => {
      window.alert('Logged out!');
      this.route.navigate(['/admin-login'])
    });
  }

}
