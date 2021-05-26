import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';
import { User } from '../models/user.class';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
userId: any = '';
user: User = new User();
female = true;


  constructor(private route:ActivatedRoute,  
    private firestore: AngularFirestore, 
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( paramMap => { //holt sich die Id des aktuellen routes
      this.userId = paramMap.get('id');
      console.log('got id', this.userId);

      this.getUser();
  })
  }

  getUser() {
    this.firestore.collection('users')
    .doc(this.userId) //holt sich die Id aus Firebase des aktuellen Users der oben ausgelesen wird
    .valueChanges()
    .subscribe((user: any) => {
      this.user = new User(user); //linke user: "user" von zeile 12, rechte user: user aus zeile 30(subscribe)
      console.log('got user', this.user);
    });
  }

  editMenu(){
    const dialog = this.dialog.open(DialogEditAddressComponent);
    dialog.componentInstance.user = new User(this.user.toJSON()); //greift auf die neue Komponente zu & erstellt eine Kopie vom Object
    dialog.componentInstance.userId = this.userId;
  }

  editUserDetail(){
    const dialog = this.dialog.open(DialogEditUserComponent);
    dialog.componentInstance.user = new User(this.user.toJSON()); //greift auf die neue Komponente zu
    dialog.componentInstance.userId = this.userId;
  }
  

}

