import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

import { UserService } from '../../user.service'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  
  username: string;

  pages = [
    {
      title: 'Home',
      url: '/menu/home/feed',
    },
    {
      title: 'Wallet',
      url: '/menu/payment',
    },
    {
      title: 'Order history',
      url: '/menu/history',
    },
    {
      title: 'Settings',
      url: '/menu/settings',
    },
  ]

  selectedPath = ''

  constructor(
    private router: Router,
    public user: UserService
    ) { 
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
    this.username = user.getUsername();
  }

  ngOnInit() {
  }

}
