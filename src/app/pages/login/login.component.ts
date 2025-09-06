import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SocialIconsComponent } from '../../shared/social-icons/social-icons.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, SocialIconsComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('pageTransition', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-100%)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        animate('600ms ease-in', style({ opacity: 0, transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    console.log('Login form submitted:', {
      email: this.email,
      password: this.password
    });
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
