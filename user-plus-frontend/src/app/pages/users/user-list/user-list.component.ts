import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { User } from '../shared/user';
import { UserService } from '../shared/user.service';
import { UserFormComponent } from '../user-form/user-form.component';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  searchTerm: number
  users$: Observable<User[]>

  constructor(public dialog: MatDialog, private userService:UserService) { 
    this.userService.getAll().pipe(finalize(() => {this.users$ = userService.getUsersData()})).subscribe(users => this.userService.setUsersData(users));
  }

  ngOnInit(): void {
  }

  openDialogUserCreate(): void {
    const dialogRef = this.dialog.open(UserFormComponent, {
      width: '320px'});
    dialogRef.afterClosed().subscribe(result => {});
  }

  filter(){}
}
