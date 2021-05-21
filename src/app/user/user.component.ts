import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {MatDialog} from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from '../models/user.class';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user = new User();
  allUsers = [];

  constructor(public dialog: MatDialog, private firestore: AngularFirestore) {
  
   }

  ngOnInit(): void {
    this.firestore
    .collection('users')
    .valueChanges() //wenn es sich ändert
    
    .subscribe((changes: any) => { //holt die aktuellen User die erstellt wurden von der Datenbank
      console.log('Received changes from Database', changes);
      this.allUsers = changes;
    });
  }

  openDialog() {
this.dialog.open(DialogAddUserComponent);
  }

}
function changes(changes: any, any: any) {
  throw new Error('Function not implemented.');
}

