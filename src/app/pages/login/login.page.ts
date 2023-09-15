import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/providers/auth.service';
import { ColleagueService } from 'src/app/providers/colleague.service';

class ModelLogin{
  pseudo?:string;
  password?:string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {

  formLogin:FormGroup;
  model:ModelLogin = new ModelLogin();
  jwt:string|any;
  connexionOK:boolean = true;

  constructor(private authService:AuthService, private route:Router, private formBuilder:FormBuilder, private colleagueService: ColleagueService){
    this.formLogin = this.formBuilder.group({
      pseudo: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

    submitLogin(){

      if(this.model.pseudo && this.model.password){
        this.authService.login(this.model.pseudo, this.model.password).subscribe((login) => {
          this.jwt = login;
          if(this.jwt){
            localStorage.setItem("jwt", this.jwt.jwt);
            this.colleagueService.action.next(1)
            this.route.navigate(["/welcomePage"]);
        }
      },
      (error) => {
        console.error(error);
        this.connexionOK = false;
      });
    }
  }
}
