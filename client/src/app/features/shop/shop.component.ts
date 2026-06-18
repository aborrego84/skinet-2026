import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../shared/models/product';
import { ShopService } from '../../core/services/shop.service';
import { MatCard } from '@angular/material/card';
import { ProductItemComponent } from "./product-item/product-item.component";

@Component({
  selector: 'app-shop',
  imports: [
    MatCard,
    ProductItemComponent
],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
})
export class ShopComponent implements OnInit{

  products: Product[] = [];
  shopService= inject(ShopService);

 ngOnInit(): void {
   this.shopService.GetProducts().subscribe({
    next: response => this.products = response.data,
    error: error => console.log(error)    
   })
  }
}
