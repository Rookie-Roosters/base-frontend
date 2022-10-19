import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
})
export class SideMenuComponent implements OnInit {
  buttons = [
    {
      name: 'Inicio',
      route: '/dashboard/home',
      icon: 'uil-estate',
    },
    {
      name: 'Bancos',
      route: '/dashboard/banks',
      icon: 'uil-university',
    },
    {
      name: 'Transacciones',
      route: '/dashboard/transactions',
      icon: 'uil-bill',
    },
    {
      name: 'Empleados',
      route: '/dashboard/employees',
      icon: 'uil-users-alt',
    },
    {
      name: 'Automatizaciones',
      route: '/dashboard/automation',
      icon: 'uil-puzzle-piece',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
