import { Component } from '@angular/core';
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page{
  a=[];
  b=[];
  c=[];
  constructor()  { 
   this.a= profile;
   this.b= orders;
   this.c= oldorders;
  }

}
const profile=[
  { 
    image:'assets/images/chasmis.jpg',
  }
]
const orders=[
  { 
    image2:'assets/images/2.jpg',
    title:'electrical engineering book',
    ddate:'12/2/2019'
  },
  { 
    image2:'assets/images/3.jpg',
    title:'civil engineering',
    ddate:'11/5/2019'
  },
  { 
    image2:'assets/images/old1.jpg',
    title:'civil engineering',
    ddate:'9/8/2019'
  }
]
const oldorders=[
  { 
    image3:'assets/images/old2.jpg',
    title:'bio old book',
    ddate:'5/12/2019'
  },
  { 
    image3:'assets/images/old4.jpg',
    title:'physics old book',
    ddate:'5/12/2019'
  }
]