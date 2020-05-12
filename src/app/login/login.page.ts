import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
              private router: Router,
              private afAuth: AngularFireAuth,
              private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }
async onsubmit(form: NgForm){
    const{
      email,
      password,
       } = form.value;
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    console.log(returnUrl);
    await this.afAuth.auth.signInWithEmailAndPassword(email,password);
  }
}
