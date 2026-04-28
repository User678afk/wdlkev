import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.html', // Ho tolto ".component"
  styleUrls: ['./product-detail.css']   // Ho tolto ".component"
})
export class ProductDetailComponent {
  @Input() product: Product | null = null;
}