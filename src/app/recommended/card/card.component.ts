import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent {
  @Input() product!: Product;
}
