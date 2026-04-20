import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  constructor(private formBuilder: FormBuilder,
              private authService: AuthService ,
              private router: Router
  ) {}

  loginForm!: FormGroup;
   ngOnInit() {
     this.loginForm = this.formBuilder.group({
       email: ['', [Validators.required, Validators.email]],
       password: ['', [Validators.required, Validators.minLength(8)]],
     });
   }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;   
    }
    this.authService.login(this.loginForm.value).subscribe({
      next: (response) => {
        if (response.success) {       
          this.router.navigate(['/']);
      }
    },
      error: (error) => {
        const message = error.error?.message || 'An error occurred during login. Please try again.';
        this.loginForm.setErrors({ serverError: message });
      } 
    });
  }
}
