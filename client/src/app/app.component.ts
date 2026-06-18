import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./layout/header/header.component";
import { Product } from './shared/models/product';
import { ShopService } from './core/services/shop.service';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent,
  
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App  implements OnInit{
  //protected readonly title = signal('client');
 title = "Skinet"; 
 products: Product[] = [];
 shopService= inject(ShopService);

 ngOnInit(): void {
   this.shopService.GetProducts().subscribe({
    next: response => this.products = response.data,
    error: error => console.log(error)
    
   })
 }
  
}
