import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../../models/product' // Nota il percorso corretto
import { ProductDetailComponent } from '../product-detail/product-detail';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductDetailComponent],
  templateUrl: './product-list.html', //  .component
  styleUrls: ['./product-list.css']    // .component
})
export class ProductListComponent {
  products: Product[] = [
    { name: 'Laptop', price: 999, description: 'Potente laptop per lo sviluppo.' },
    { name: 'Mouse Wireless', price: 25, description: 'Mouse ergonomico.' },
    { name: 'Tastiera Meccanica', price: 70, description: 'Tastiera con switch rossi.' },
    { name: 'Monitor 27"', price: 200, description: 'Monitor IPS Full HD.' },
    { name: 'Cuffie Bluetooth', price: 60, description: 'Cuffie con cancellazione del rumore.' }
  ];

    selectedProduct: Product | null = null;
    newProduct: Product = { name: '', price: 0, description: '' };
  
    selectProduct(product: Product) {
      this.selectedProduct = product;
    }
    
    deleteProduct(product: Product, event: MouseEvent) {
  event.stopPropagation(); // Serve per evitare che il click selezioni anche il prodotto mentre lo elimini
  this.products = this.products.filter(p => p !== product);
  if (this.selectedProduct === product) {
    this.selectedProduct = null; // Deseleziona se elimini quello visualizzato
  }
    }
    addProduct() {
  if (this.newProduct.name && this.newProduct.price > 0) {
    this.products.push({ ...this.newProduct }); // Aggiunge una copia del nuovo prodotto
    this.newProduct = { name: '', price: 0, description: '' }; // Svuota il form
  }
    }
  }