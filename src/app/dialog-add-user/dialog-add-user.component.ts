import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
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
  loading = false;
/*   female = true; */

  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>, private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  saveUser() { //saves the user to firebase
    this.user.birthDate = this.birthDate.getTime();
    console.log('Current user', this.user);
    this.loading = true;
    this.firestore
      .collection('users')
      .add(this.user.toJSON())
      .then((result: any) => {
        this.loading = false;
        console.log('Adding user finished', result)
        this.dialogRef.close(); //close the dialog
      });
  }

  femalePic() {
    this.user.img = "assets/img/profile-female.png";
    console.log('image changed female');
  /*   this.female = true; */
  }

  malePic() {
    this.user.img = "assets/img/profile-male.png";
    /* this.female = false; */
    console.log('image male'); 
  }

}
