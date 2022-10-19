import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '@authentication/services';
import { validatePassword } from '@shared/utils';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  constructor(public authService: AuthenticationService, private router: Router) {}
  ngOnInit(): void {}

  signUpForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  });
  submit() {
    if (this.signUpFormIsValid) {
      this.loadingForm = true;
      this.authService
        .signUp(
          this.signUpForm.controls.email.value!,
          this.signUpForm.controls.firstName.value!,
          this.signUpForm.controls.lastName.value!,
          this.signUpForm.controls.password.value!
        )
        .subscribe({
          next: (res) => {
            localStorage.setItem('authToken', res.data!.authToken!);
            localStorage.setItem('userId', res!.data!.user.id.toString());
            this.router.navigateByUrl('/');
          },
          error: (err) => {
            this.showError(`La cuenta ya existe`);
          },
        })
        .add(() => {
          this.loadingForm = false;
        });
    }
  }

  get emailError() {
    return this.signUpForm.controls.email.invalid && this.signUpForm.controls.email.touched;
  }
  get firstNameError() {
    return this.signUpForm.controls.firstName.invalid && this.signUpForm.controls.firstName.touched;
  }
  get lastNameError() {
    return this.signUpForm.controls.lastName.invalid && this.signUpForm.controls.lastName.touched;
  }
  get passwordError() {
    const messages = validatePassword(this.signUpForm.controls.password.value!);
    if (messages.length != 0 && this.signUpForm.controls.password.touched) return messages;
    return [];
  }
  get confirmPasswordError() {
    return (
      (this.signUpForm.controls.confirmPassword.invalid ||
        this.signUpForm.controls.confirmPassword.value != this.signUpForm.controls.password.value) &&
      this.signUpForm.controls.confirmPassword.touched
    );
  }
  get signUpFormIsValid() {
    return this.signUpForm.valid && this.passwordError.length == 0 && !this.confirmPasswordError;
  }

  showPassword = false;
  showConfirmPassword = false;
  loadingForm = false;

  showAlert = false;
  alertText = '';
  showError(message: string) {
    this.alertText = message;
    this.showAlert = true;
    setTimeout(() => {
      this.showAlert = false;
    }, 3000);
  }
}
