import { AuthService } from '../../../core/services/auth.service';
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

  registerForm!: FormGroup;
   ngOnInit() {
     this.registerForm = this.formBuilder.group({
       email: ['', [Validators.required, Validators.email]],
       password: ['', [Validators.required, Validators.minLength(8)]],
     });
   }

  onSubmit() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;   
    }
    
    this.authService.register(this.registerForm.value).subscribe({
      next: (response) => {
        console.log('Registration response:', response);
        console.log('success:', response.success);  
        if (response.success) {       
          this.router.navigate(['/login']);
        }
      },
      error: (error) => {
        const message = error.error?.message || 'An error occurred during registration. Please try again.';
        this.registerForm.setErrors({ serverError: message });
      } 
    });
  }
}
