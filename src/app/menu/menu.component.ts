import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit{
  welcomePage = true;
  template = false;
  reactive = false;

  constructor(private location: Location) {}


  ngOnInit(): void {
    switch (this.location.prepareExternalUrl(this.location.path())) {
      case '/welcomePage':
        this.welcomePage = true;
        this.template = false;
        this.reactive = false;
        break;
      case '/template':
        this.welcomePage = false;
        this.template = true;
        this.reactive = false;
        break;
      case '/reactive':
        this.welcomePage = false;
        this.template = false;
        this.reactive = true;
        break;
      default:
        this.welcomePage = true;
        this.template = false;
        this.reactive = false;
    }
  }
  handleLinkClick(link: string) {
    switch (link) {
      case 'welcomePage':
        this.welcomePage = true;
        this.template = false;
        this.reactive = false;
        break;
      case 'template':
        this.welcomePage = false;
        this.template = true;
        this.reactive = false;
        break;
      case 'reactive':
        this.welcomePage = false;
        this.template = false;
        this.reactive = true;
        break;
      default:
        this.welcomePage = true;
        this.template = false;
        this.reactive = false;
    }
  }
}
