import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.class';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {
  startDate = new Date(1990, 0, 1);
  user = new User();
  birthDate!: Date;
  
  constructor() { }

  ngOnInit(): void {
  }

  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log('Current user', this.user);
  }

}
