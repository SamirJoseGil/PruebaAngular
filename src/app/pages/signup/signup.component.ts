import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [],
  templateUrl: './signup.component.html',
})
export class SignupComponent {
  constructor(private router: Router) {}



  
  IrAlHome() {
    this.router.navigate(['/home']);
  }
}
