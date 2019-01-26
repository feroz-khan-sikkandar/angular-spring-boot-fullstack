import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  username = "feroz";
  password = "";
  invalidLogin = false;
  login(){
    //console.log(this.username);
    if(this.username === "feroz" && this.password === "fk"){
      this.router.navigate(['welcome',this.username]);
      this.invalidLogin = false;

    } else{
      this.invalidLogin = true;
    }
  }

}
