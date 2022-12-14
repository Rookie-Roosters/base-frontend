import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '@authentication/services';
import { validatePassword } from '@shared/utils';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  constructor(public authService: AuthenticationService, private router: Router) {}

  ngOnInit(): void {}

  logInForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  showPassword = false;
  loadingForm = false;

  submit() {
    if (this.logInForm.valid) {
      this.loadingForm = true;
      this.authService
        .logIn(this.logInForm.controls.email.value!, this.logInForm.controls.password.value!)
        .subscribe({
          next: (res) => {
            localStorage.setItem('authToken', res.data!.authToken!);
            localStorage.setItem('userId', res!.data!.user.id.toString());
            this.router.navigateByUrl('/');
          },
          error: (err) => {
            this.showError(`Usuario o Contraseña Incorrecto`);
          },
        })
        .add(() => {
          this.loadingForm = false;
        });
    }
  }

  get emailError() {
    return this.logInForm.controls.email.invalid && this.logInForm.controls.email.touched;
  }
  get passwordError() {
    const messages = validatePassword(this.logInForm.controls.password.value!);
    if (messages.length != 0 && this.logInForm.controls.password.touched) return messages;
    return [];
  }

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
