import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../menu/menu.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, MenuComponent],
  templateUrl: './layout.component.html',
  styles: [
  ]
})
export class LayoutComponent {

}
