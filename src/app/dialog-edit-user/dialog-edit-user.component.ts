import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../models/user.class';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent implements OnInit {
  user!: User;
  userId!: string;
  loading = false;
  birthDate!: Date;
  startDate = new Date(1990, 0, 1);

  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>, private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  saveUser() {
    this.firestore
      .collection('users')
      .doc(this.userId)
      .update(this.user.toJSON()) //Nutzer wird als JSON hier rein gegeben (geupdatet in firestore)
      .then( () => {
        this.loading = false;
        this.dialogRef.close();
      });
  }

}
