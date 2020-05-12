import { Component, OnInit } from '@angular/core';
import { CollegesService } from '../colleges.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcolleges',
  templateUrl: './addcolleges.page.html',
  styleUrls: ['./addcolleges.page.scss'],
})
export class AddcollegesPage implements OnInit {
  product= {};
  colleges$;
  constructor(private collegesService: CollegesService,
              private router: Router,
) {}
  ngOnInit() {
  }
 onsubmit(product){
    this.collegesService.create(product);
    this.router.navigate(['addcolleges']);
    window.location.reload(true);
  }
}
