import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css'],
  providers: [UserService]
})
export class CheckinComponent implements OnInit {
  public title: string;
  public user: User;
  // public status: string;

  constructor(
    private _userService: UserService
  ) { 
    this.title = "Registrar un usuario";
    this.user = new User('','','','','');
  }

  ngOnInit(): void {
  }

  

}
