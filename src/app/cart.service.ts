import { Injectable } from "@angular/core";
import { product } from "./product";

@Injectable({
    providedIn: 'root',
  })
  export class CartService {
    
    public cartItems: any[] = [];
    constructor() {
    }
  
    getCart(){
      return this.cartItems;
    }
    
    addToCart(product:product){
      var exists = this.cartItems.find(({name}) => name === product.name);
      if (!exists) {
        this.cartItems.push({...product, num:1}); 
        return;
      }
      exists.num += 1;
    }

    removeFromCart(product:product){
      var temp = this.cartItems.find(({name}) => name === product.name);
      temp.num = temp.num-1;
      if(temp.num ===0){
        var index = this.cartItems.indexOf(product);
        if (index !== -1) {
            this.cartItems.splice(index, 1);
        } 
      }
      return this.cartItems;
    }
  }