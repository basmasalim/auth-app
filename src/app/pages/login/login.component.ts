import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";
import { SocialIconsComponent } from "../../shared/social-icons/social-icons.component";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [CommonModule, FormsModule, SocialIconsComponent],
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  animations: [
    trigger("pageTransition", [
      transition(":enter", [
        style({ opacity: 0, transform: "translateX(-100%)" }),
        animate(
          "600ms ease-out",
          style({ opacity: 1, transform: "translateX(0%)" })
        ),
      ]),
      transition(":leave", [
        animate(
          "600ms ease-in",
          style({ opacity: 0, transform: "translateX(100%)" })
        ),
      ]),
    ]),
  ],
})
export class LoginComponent {
  // Login method toggle
  loginMethod: "email" | "phone" = "email";

  // Email/Password fields
  email: string = "";
  password: string = "";

  // Phone/OTP fields
  phone: string = "";
  otp: string = "";
  otpSent: boolean = false;

  constructor(private router: Router) {}

  onSubmit() {
    if (this.loginMethod === "email") {
      console.log("Email login submitted:", {
        email: this.email,
        password: this.password,
      });
    } else {
      if (!this.otpSent) {
        this.sendOTP();
      } else {
        this.verifyOTP();
      }
    }
  }

  sendOTP() {
    console.log("Sending OTP to:", this.phone);
    // Simulate OTP sending
    this.otpSent = true;
  }

  verifyOTP() {
    console.log("Verifying OTP:", this.otp);
    // Navigate to OTP verification page
    this.router.navigate(["/otp-verify"], {
      queryParams: { phone: this.phone },
    });
  }

  toggleLoginMethod() {
    this.loginMethod = this.loginMethod === "email" ? "phone" : "email";
    // Reset form fields when switching
    this.email = "";
    this.password = "";
    this.phone = "";
    this.otp = "";
    this.otpSent = false;
  }

  navigateToRegister() {
    this.router.navigate(["/register"]);
  }
}
