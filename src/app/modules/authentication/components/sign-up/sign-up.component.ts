import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserCreateDto } from '../../dto';
import { AuthenticationService } from '../../services'; 
import { LocalStorageService } from 'src/app/core/services';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  user = new UserCreateDto();
  error: string = '';

  constructor(
    private authenticationService: AuthenticationService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  submitted = false;

  onSubmit() { /*
    this.authenticationService.signUp(this.user).subscribe({
      next: (v: any) => {
        this.localStorageService.token = v.data.authToken;
        this.localStorageService.user = v.data.user;
      },
      error: (e: any) => {
        this.error = e.error.messages;
      },
      complete: () => {
        this.router.navigate(['/']);
      },
    });*/
  }
}
