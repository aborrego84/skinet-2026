import { Component, inject } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { CarItemComponent } from "./car-item/car-item.component";
import { OrderSummaryComponent } from "../../shared/components/order-summary/order-summary.component";

@Component({
  selector: 'app-cart',
  imports: [CarItemComponent, OrderSummaryComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  cartService = inject(CartService);

}
