import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/interfaces/user.interface';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [],
})
export class LayoutPageComponent {
  public sideBarItems = [
    { label: 'Heroes', icon: 'label', url: './list' },
    { label: 'Add Hero', icon: 'add', url: './new-hero' },
    { label: 'Search', icon: 'search', url: './search' },
  ];

  constructor(private authService: AuthService, private router: Router) {}

  get currentUser(): User | undefined {
    return this.authService.currentUser;
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/auth']);
  }
}
