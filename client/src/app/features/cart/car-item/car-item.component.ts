import { Component, inject, input } from '@angular/core';
import { RouterLink } from "@angular/router";
import { CartItem } from '../../../shared/models/cart';
import { MatIcon} from "@angular/material/icon";
import { CurrencyPipe } from '@angular/common';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-car-item',
  imports: [
    RouterLink,
    MatButtonModule,
    MatIcon,
    CurrencyPipe,
    MatIconButton
    
],
  templateUrl: './car-item.component.html',
  styleUrl: './car-item.component.scss',
})
export class CarItemComponent {
  item = input.required<CartItem>();
  cartService = inject(CartService);
  
  
  incrementQuantity(){
    this.cartService.addItemToCart(this.item());
  }
  decrementQuantity(){
    this.cartService.removeItemFromCart(this.item().productId);
  }
  removeItemFromCart(){
    this.cartService.removeItemFromCart(this.item().productId, this.item().quantity)
  }
}
