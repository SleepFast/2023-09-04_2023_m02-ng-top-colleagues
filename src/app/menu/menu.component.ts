import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  welcomePage = true
  template = false
  reactive = false

  handleLinkClick(link: string) {
    switch (link) {
      case 'welcomePage':
        this.welcomePage = true
        this.template = false
        this.reactive = false
        break;
      case 'template':
        this.welcomePage = false
        this.template = true
        this.reactive = false
        break;
      case 'reactive':
        this.welcomePage = false
        this.template = false
        this.reactive = true
        break;
      default:
        this.welcomePage = true
        this.template = false
        this.reactive = false
    }
  }
}
