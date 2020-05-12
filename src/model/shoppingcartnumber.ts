import { shoppingcartitem } from './shopping-cart-item';


export class shoppingcartnumber {

      a: number;
      public items: shoppingcartitem[] = [];

constructor(public data?: Partial <shoppingcartnumber> ){
  Object.assign(this.data);
}
get totalItemsCounts() {
      this.a = 0;
      // tslint:disable-next-line: forin
      for (const pid in this.data.items)
       {  
         this.a +=  this.data.items[pid].quantity;
       }
      return this.a;
}
get totalprice(){
      this.a = 0;
      // tslint:disable-next-line: forin
      for (const pid in this.data.items)
      {
            this.a += (this.data.items[pid].product.price) * (this.data.items[pid].quantity);
   
      }
      return this.a;
}
totaltitleCounts(pid): string {

      return this.data.items[pid].product.btitle;
}
totalcategoryCounts(pid): string {
      
      return this.data.items[pid].product.category;
}
totalwriterCounts(pid): string {
      
      return this.data.items[pid].product.writer;
}
totalpriceCounts(pid): number{
      
      return this.data.items[pid].product.price;
}
totalimageCounts(pid): string{
      
      return this.data.items[pid].product.image;
}
totalquantityCounts(pid): number{
      return this.data.items[pid].quantity;
}
get productid(): string[]{
 
   return Object.keys(this.data.items);
}
}

