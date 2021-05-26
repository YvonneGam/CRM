import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../models/user.class';

@Component({
  selector: 'app-dialog-edit-address',
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.scss']
})
export class DialogEditAddressComponent implements OnInit {
  user!: User;
  userId! : string;
  loading = false;

  constructor(public dialogRef: MatDialogRef<DialogEditAddressComponent>, private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }


  saveUser() {
    this.loading = true;
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
