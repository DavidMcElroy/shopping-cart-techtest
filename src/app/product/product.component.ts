import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppComponent } from '../app.component';
import { product } from '../product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  @Input() product: any;
  @Input() button: string = "add to cart";
  @Output() data: EventEmitter<product> = new EventEmitter<product>();
  constructor() {
   }

  ngOnInit(): void {
  }

  addToCart(){
    this.data.emit(this.product);
  }

}
