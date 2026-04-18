import { AuthService } from './../../../shared/services/auth';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class RegisterComponent {

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
