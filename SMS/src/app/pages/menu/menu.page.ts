import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  
  pages = [
    {
      title: 'Home Page',
      url: '/menu/home/feed',
    },
    {
      title: 'Payment Page',
      url: '/menu/payment',
    },
    {
      title: 'History Page',
      url: '/menu/history',
    },
    {
      title: 'Settings Page',
      url: '/menu/settings',
    },
  ]

  selectedPath = ''

  constructor(private router: Router) { 
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
  }

  ngOnInit() {
  }

}
