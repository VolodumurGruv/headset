import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../recommended/card/card.component';
import { Product } from '../recommended/product.interface';


@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './categories.component.html',
  styles: [
  ]
})
export class CategoriesComponent {
  public productCategories: Product[] = [
    {
      image: '../../assets/styles/pics/categories/Layer1.png',
      title: "Headphones & earbuds"
    },
    {
      image: '../../assets/styles/pics/categories/Layer2.png',
      title: ""
    },
    {
      image: '../../assets/styles/pics/categories/Layer3.png',
      title: "Speakers"
    },
    {
      image: '../../assets/styles/pics/categories/Layer4.png',
      title: ""
    },
    {
      image: '../../assets/styles/pics/categories/Layer5.png',
      title: "Audio sunglasses"
    },
    {
      image: '../../assets/styles/pics/categories/Layer6.png',
      title: ""
    },

  ]

}
