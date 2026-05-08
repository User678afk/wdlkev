import { Component } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent],
  // con questo non si ha problemi con file non trovati
  template: `<app-product-list></app-product-list>`
})
export class App { } 