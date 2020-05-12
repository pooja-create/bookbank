import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _angularFireAuth : AngularFireAuth, private _router: Router){}
  canActivate(
    activatedRouteSnapshot: ActivatedRouteSnapshot,
    stateSnapshot: RouterStateSnapshot): Observable<boolean> {
      return this._angularFireAuth.authState.pipe(map((auth)=>{
        if (!auth) { 
          this._router.navigate(['/login']);
          return false;
        } else {
          return true;
        }

      }));
    
  }
    
  }


