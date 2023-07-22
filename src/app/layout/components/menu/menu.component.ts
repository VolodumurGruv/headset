import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent {

  public isActive= false;

  public toggleButton():boolean {
    this.isActive = !this.isActive
    console.log(this.isActive)
    return this.isActive
  }
}
