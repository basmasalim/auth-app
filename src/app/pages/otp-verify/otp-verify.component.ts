import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-otp-verify',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './otp-verify.component.html',
  styleUrls: ['./otp-verify.component.css'],
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
export class OtpVerifyComponent implements OnInit {
  phone: string = '';
  otp: string = '';
  otpDigits: string[] = ['', '', '', '', '', ''];
  countdown: number = 60;
  canResend: boolean = false;
  private countdownInterval: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Get phone number from query params
    this.route.queryParams.subscribe(params => {
      this.phone = params['phone'] || '';
    });
    
    this.startCountdown();
  }

  ngOnDestroy() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }

  startCountdown() {
    this.canResend = false;
    this.countdown = 60;
    
    this.countdownInterval = setInterval(() => {
      this.countdown--;
      if (this.countdown <= 0) {
        this.canResend = true;
        clearInterval(this.countdownInterval);
      }
    }, 1000);
  }

  onOtpDigitChange(index: number, event: any) {
    const value = event.target.value;
    
    if (value && /^\d$/.test(value)) {
      this.otpDigits[index] = value;
      
      // Auto-focus next input
      if (index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`) as HTMLInputElement;
        if (nextInput) {
          nextInput.focus();
        }
      }
    } else if (value === '') {
      this.otpDigits[index] = '';
    }
    
    // Update combined OTP
    this.otp = this.otpDigits.join('');
  }

  onKeyDown(index: number, event: KeyboardEvent) {
    // Handle backspace
    if (event.key === 'Backspace' && !this.otpDigits[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`) as HTMLInputElement;
      if (prevInput) {
        prevInput.focus();
      }
    }
  }

  verifyOtp() {
    if (this.otp.length === 6) {
      console.log('Verifying OTP:', this.otp, 'for phone:', this.phone);
      // Simulate OTP verification
      // On success, navigate to dashboard or home
      alert('OTP verified successfully!');
      this.router.navigate(['/login']);
    } else {
      alert('Please enter a valid 6-digit OTP');
    }
  }

  resendOtp() {
    if (this.canResend) {
      console.log('Resending OTP to:', this.phone);
      this.otpDigits = ['', '', '', '', '', ''];
      this.otp = '';
      this.startCountdown();
      
      // Clear all inputs
      for (let i = 0; i < 6; i++) {
        const input = document.getElementById(`otp-${i}`) as HTMLInputElement;
        if (input) {
          input.value = '';
        }
      }
      
      // Focus first input
      const firstInput = document.getElementById('otp-0') as HTMLInputElement;
      if (firstInput) {
        firstInput.focus();
      }
    }
  }

  goBack() {
    this.router.navigate(['/login']);
  }
}
