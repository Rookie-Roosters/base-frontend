import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '@employees/services';
import { User } from '@shared/dtos';

@Component({
  selector: 'app-employees-page',
  templateUrl: './employees-page.component.html',
  styleUrls: ['./employees-page.component.css'],
})
export class EmployeesPageComponent implements OnInit {
  constructor(private readonly employeesService: EmployeesService) {}
  employees: User[] = [];
  loading = false;

  ngOnInit(): void {
    this.loading = true;
    this.employeesService
      .getUsers()
      .subscribe({
        next: (res) => {
          this.employees = res.data!;
        },
        error: (err) => {
          console.log(err);
          this.showError('Hubo un error al cargar los usuarios');
        },
      })
      .add(() => {
        this.loading = false;
      });
  }

  showAlert = false;
  alertText = '';
  showError(message: string) {
    this.alertText = message;
    this.showAlert = true;
    setTimeout(() => {
      this.showAlert = false;
    }, 7000);
  }
}
