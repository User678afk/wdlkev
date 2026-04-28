import { Component } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent],
  // Usiamo il template inline così non abbiamo problemi di file non trovati
  template: `<app-product-list></app-product-list>`
})
export class App { } // Qui deve esserci scritto App, non AppComponent