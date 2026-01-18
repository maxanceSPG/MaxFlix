import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { LucideAngularModule, FileIcon, User, Menu, Search, LogOut } from 'lucide-angular';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../app/auth.service';

@Component({
  selector: 'app-nav-bar',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar implements OnInit, OnDestroy {
  readonly User = User;
  readonly Menu = Menu;
  readonly FileIcon = FileIcon;
  readonly Search = Search;
  readonly LogOut = LogOut;

  constructor(public auth: AuthService, public router: Router) {}

  // Si vrai, on affiche un fond derrière la navbar
  showBackground: boolean = false;

  isActive(route: string): boolean {
    return this.router.url === route;
  }

  ngOnInit() {
    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.onScroll.bind(this));
  }

  onScroll() {
    if (window.scrollY > 68) {
      this.showBackground = true;
    } else {
      this.showBackground = false;
    }
  }
}
