import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { product } from '../product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartTitle = 'Shopping Cart';
  remove = "remove"
  products: any[]=[] 
  total = 0;

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.products = this.cartService.getCart();
    this.updateTotal();
  }

  eventHandler(event:product){
    this.products = this.cartService.removeFromCart(event);
    console.log(this.products);
    this.updateTotal();
  }

  updateTotal(){
    this.total=0;
    for(let product of this.products){
      this.total+= (product?.num * product?.price);
    }
  }

}
