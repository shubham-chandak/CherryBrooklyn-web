import { Component, OnInit } from "@angular/core";
import { CartService } from "src/app/services/cart.service";
import { OrderItem } from "src/app/models/orderItem";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  orderItems: OrderItem[] = [];
  totalAmount: number;
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.orderItems = this.cartService.orderItems;
  }

  getTotalAmount() {
    return this.cartService.totalAmount;
  }

  getCartItems(): OrderItem[] {
    return this.cartService.orderItems.filter(x => x.quantity > 0);
  }
}
