import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  ImageArray1: any[];
  ImageArray2: any[];
  ImageArray3: any[];
  constructor(public router: Router) {
    this.ImageArray1=[

      {image: 'assets/images/pencil s.jpg',price:'5'},
      {image: 'assets/images/pencil.jpg',price:'10'},
      {image: 'assets/images/pen.jpg',price:'30'},
      {image: 'assets/images/file.jpg',price:'20'},
    ];
    this.ImageArray2=[

      {image: 'assets/images/bundle.jpg',price:'50'},
      {image: 'assets/images/glue.jpg',price:'30'},
      {image: 'assets/images/notebook.jpg',price:'50'},
      {image: 'assets/images/pen1.jpg',price:'60'},
    ];
    this.ImageArray3=[

      {image: 'assets/images/jkcopier.jpg',price:'50'},
      {image: 'assets/images/notebook1.jpg',price:'30'},
      {image: 'assets/images/notebook3.jpg',price:'50'},
      {image: 'assets/images/parker.jpg',price:'60'},
    ];
  }
    slideOpt = {
    loop: true,
    autoplay:true,
    slidesPerView: 3
    
  };

}
