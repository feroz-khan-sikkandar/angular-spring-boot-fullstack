import { Component, OnInit } from '@angular/core';
import { HadrcodedAuthenticationService } from '../service/hadrcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

 // isUserLoggedIn = false;
  constructor(private hadrcodedAuthenticationService : HadrcodedAuthenticationService) { }

  ngOnInit() {
   // this.isUserLoggedIn = this.hadrcodedAuthenticationService.isUserLoggedIn();  
  }

}
