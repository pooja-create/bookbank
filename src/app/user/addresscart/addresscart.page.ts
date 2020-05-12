import { Component, OnInit } from '@angular/core';
import { CollegesService } from 'src/app/admin/colleges.service';

@Component({
  selector: 'app-addresscart',
  templateUrl: './addresscart.page.html',
  styleUrls: ['./addresscart.page.scss'],
})
export class AddresscartPage implements OnInit {
  colleges$: any;
  constructor(private collegesService: CollegesService) { 

    this.colleges$ = this.collegesService.getall();
  }

  ngOnInit() {
  }


}
