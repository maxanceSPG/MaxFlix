import { Component, OnDestroy, OnInit } from '@angular/core';
import { LucideAngularModule, FileIcon, User, Menu, Search } from 'lucide-angular';
import { Router, RouterLink } from '@angular/router';

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

  constructor(public router: Router) {}

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
