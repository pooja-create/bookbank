import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {Camera} from '@ionic-native/camera/ngx';
import {SocialSharing} from '@ionic-native/social-sharing/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { BookdetailService } from './bookdetail.service';
import {AngularFireDatabaseModule} from 'angularfire2/database';


import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SignupService } from './signup.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
     BrowserModule,
     IonicModule.forRoot(), 
     AppRoutingModule,
     HttpClientModule,
     AngularFireAuthModule,
     AngularFirestoreModule,
     AngularFireDatabaseModule,
     FormsModule, 
     NgxDatatableModule,
     CustomFormsModule,
    
     AngularFireModule.initializeApp(environment.firebase)
    ],
  providers: [
    StatusBar,
    Camera,
    SocialSharing,
    SplashScreen,
    BookdetailService,
    

    { 
      provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy,
     }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
