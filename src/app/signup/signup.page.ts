import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  loading = false;
  user: firebase.User;
  constructor(
            private router: Router,
            private signupService: SignupService
    ) { }

  ngOnInit() {
  }

async onsubmit(form: NgForm){
    this.loading = true;
    const{
       fullname,
       email,
       password,
       } = form.value;
    try{
      
      const resp =  await firebase.auth().createUserWithEmailAndPassword(email,password);
      await resp.user.updateProfile({
        displayName: (fullname)});
      this.signupService.save(this.user);
      const uid = resp.user.uid;
      this.router.navigate(['login/${uid}']);
     } catch(error) {
       console.log(error.message);
       }
   }

}
