import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { PRODUCTS } from '../mockProduct';
import { product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  PRODUCTTITLE = 'Products List';
  products= PRODUCTS;

  
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
  }

  eventHandler(event:product){
    console.log(event);
    this.cartService.addToCart(event);
}

}
