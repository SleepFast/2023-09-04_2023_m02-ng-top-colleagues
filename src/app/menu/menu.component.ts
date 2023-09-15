import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Colleague } from '../models/colleague';
import { AuthService } from '../providers/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit{
  welcomePage = false;
  template = false;
  reactive = false;

  userLogged:Colleague | null = null;

  constructor(private authService: AuthService, private location: Location){
    this.authService.getUserLoggedIn().subscribe((user) => {
      this.userLogged = {
        pseudo: user.pseudo,
        first: user.first,
        last: user.last,
        score: user.score,
        photo: user.photo
      };
    })

  }

  deconnexion(){
    this.authService.logOut();
  }

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
