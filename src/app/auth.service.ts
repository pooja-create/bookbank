import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { userProfile } from 'src/user-profile.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  email: any;
  password: any;
  user$: Observable<firebase.User>;
  constructor(
              private route: ActivatedRoute,
              private router: Router,
              public afAuth: AngularFireAuth,
              private afs: AngularFirestore
  ) { 
     this.user$ = afAuth.authState;
  }
logout(){
    this.afAuth.auth.signOut();
    this.router.navigate(['newlogin']);
  }

islogedin(){
    return !! this.afAuth.auth.currentUser;
}

async login(email,password)
{
  await this.afAuth.auth.signInWithEmailAndPassword(this.email= email,this.password= password);
}

createUserDocument(){
  const user = this.afAuth.auth.currentUser;
  const userprofile: userProfile = {
    uid: user.uid,
    email: user.email,
    fullname: '',
  
  };
  return this.afs.doc('users/${user.uid;}').set(userprofile);
 
}
}
