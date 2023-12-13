import { Component } from '@angular/core';
import { User } from './user-profile.module';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {
  user: User;

  constructor() {
    this.user = new User(
      'Doe',
      'John',
      25,
      '',
      'https://randomuser.me/api/portraits/lego/2.jpg'
    );
    console.log(this.user);
  }
}
