import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { UserService } from '../../user.service'
import { User } from 'firebase';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  username: string;
  constructor(
    private afs: AngularFirestore,
    public user: UserService
  ) { 
    this.username = user.getUsername()
  }

  ngOnInit() {
  }

}
