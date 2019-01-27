import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HadrcodedAuthenticationService } from '../service/hadrcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(private router: Router,   private hardcodedAuthenticationService: HadrcodedAuthenticationService) { }

  ngOnInit() {
  }

  username = "feroz";
  password = "khan";
  invalidLogin = false;
  login(){
    //console.log(this.username);
   // if(this.username === "feroz" && this.password === "fk"){
    if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)){
      this.router.navigate(['welcome',this.username]);
      this.invalidLogin = false;

    } else{
      this.invalidLogin = true;
    }
  }

}
