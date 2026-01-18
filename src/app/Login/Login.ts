import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './Login.html',
  styleUrl: './Login.css',
})
export class Login {
  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}

  email: string = '';
  password: string = '';

  async onLogin() {
    try {
      await this.auth.login(this.email, this.password);
    } catch (error) {
      alert('Login failed. Please check your credentials.');
      return;
    }

    if (this.auth.isAuthenticated()) {
      this.router.navigate(['/home']);
    } else {
      alert('Login failed. Please check your credentials.');
    }
  }
}
