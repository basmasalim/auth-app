import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-social-icons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-icons.component.html',
  styleUrls: ['./social-icons.component.css']
})
export class SocialIconsComponent {
  socialIcons = [
    { name: 'Google', icon: 'fa-brands fa-google-plus-g', href: '#' },
    { name: 'Facebook', icon: 'fa-brands fa-facebook-f', href: '#' },
    { name: 'GitHub', icon: 'fa-brands fa-github', href: '#' },
    { name: 'LinkedIn', icon: 'fa-brands fa-linkedin-in', href: '#' }
  ];
}
