import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { BookdetailService } from '../bookdetail.service';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.page.html',
  styleUrls: ['./activity-detail.page.scss'],
})
export class ActivityDetailPage implements OnInit {
  data: any;
  id: any;
  
 
  constructor(private route: ActivatedRoute,private router: Router,private bookDetailService: BookdetailService) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.ImageArray1;
      }
    });
    
   }
  
ngOnInit() {
    
}



}
