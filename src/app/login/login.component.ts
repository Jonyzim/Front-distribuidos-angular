import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import {User} from "../app.types";
import {MatTooltip} from "@angular/material/tooltip";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-logins',
  standalone: true,
  imports: [
    NgOptimizedImage,
    FormsModule,
    MatInput,
    MatTooltip,
    RouterLink
  ],

  templateUrl: './login.component.html'
})
export class LoginComponent {

  user: User = new User();

  constructor(
              private router:Router) {}

  startLogin() {
    //TODO Enviar login pro back
    this.router.navigate(['farmaceutico']);
  }
}
