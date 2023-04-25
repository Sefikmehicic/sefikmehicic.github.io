import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])

  onWindowScroll() {
    if (!this.router.url.includes('About')) {
      let navbar = document.querySelector('.navbar') as HTMLElement;
      let logoColor = document.querySelector('#logo-color') as HTMLElement;
      let logoWhite = document.querySelector('#logo-white') as HTMLElement;

      if (window.pageYOffset > navbar.clientHeight) {
        navbar.classList.add('navbar-inverse');
        navbar.classList.add('shadow-sm');
        logoWhite.classList.add('remove');
        logoColor.classList.remove('remove');

      } else {
        navbar.classList.remove('navbar-inverse');
        navbar.classList.remove('shadow-sm');
        logoWhite.classList.remove('remove');
        logoColor.classList.add('remove');
      }
    }
  }
}
