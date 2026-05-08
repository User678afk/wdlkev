import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../../models/product'
import { ProductDetailComponent } from '../product-detail/product-detail';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductDetailComponent],
  templateUrl: './product-list.html', 
  styleUrls: ['./product-list.css']  
})
export class ProductListComponent {
  products: Product[] = [
    { name: 'Buongiorno', price: 999, description: 'provaprova.' },
    { name: 'verifica', price: 10, description: '123456790.' },
    { name: 'Olchowik', price: 67, description: 'Polacco.' },
    { name: 'Ahmed"', price: 69, description: 'Bangladino.' },
    { name: 'Othman', price: 21, description: 'Egiziano.' }
  ];

    selectedProduct: Product | null = null;
    newProduct: any = { name: '', price: null, description: '' };
  
    selectProduct(product: Product) {
      this.selectedProduct = product;
    }
    
    deleteProduct(product: Product, event: MouseEvent) {
  event.stopPropagation(); // serve per non fare che il click selezioni anche il prodotto mentre lo elimini
  this.products = this.products.filter(p => p !== product);
  if (this.selectedProduct === product) {
    this.selectedProduct = null; // deseleziona se elimini quello visualizzato
  }
    }
    addProduct() {
    if (this.newProduct.name && this.newProduct.price > 0) {
    this.products.push({ ...this.newProduct }); 
    // reset di tutto
    this.newProduct = { name: '', price: null, description: '' }; 
    }
  }
}