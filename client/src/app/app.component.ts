import { afterNextRender, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./layout/header/header.component";
import { ShopComponent } from "./features/shop/shop.component";





@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App {
  //protected readonly title = signal('client');
 title = "Skinet";   

 /* constructor(){

 afterNextRender({
      write: () => {
        const splash = document.getElementById('initial-splash');

        if (splash) {
          splash.remove();
        }
      }
    });
  }*/
}
