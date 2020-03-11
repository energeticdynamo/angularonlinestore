import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/modules/authen/services/login.service';

@Component({
  selector: 'app-menu-top',
  templateUrl: './menu-top.component.html',
  styleUrls: ['./menu-top.component.scss']
})
export class MenuTopComponent implements OnInit {

  user:firebase.User;
  constructor(private login:LoginService) { }

  ngOnInit() {
    this.login.getCurrentUser().subscribe(user=>this.user=user);
  }

  logout(){
    this.login.logoutWithGoogle();
  }

}
