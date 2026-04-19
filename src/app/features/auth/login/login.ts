import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth';

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

  form!: FormGroup;
   ngOnInit() {
     this.form = this.formBuilder.group({
       email: ['', [Validators.required, Validators.email]],
       password: ['', [Validators.required, Validators.minLength(8)]],
     });
   }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;   
    }
    this.authService.register(this.form.value).subscribe({
      next: (response) => {
        if (response.success) {       
          this.router.navigate(['/login']);
        } else {
          this.form.setErrors({ serverError: response.message || 'Registration failed. Please try again.' });  
        }
      }
    });
  }
}
