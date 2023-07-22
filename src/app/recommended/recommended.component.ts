import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import {recommendedProductions} from "./rowData/rowData";
import { Product } from './product.interface';

@Component({
  selector: 'app-recommended',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './recommended.component.html',
  styles: [
  ]
})
export class RecommendedComponent {
  public recommendedProducts: Product[] = recommendedProductions;
}
