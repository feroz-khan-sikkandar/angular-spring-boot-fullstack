import { Component, OnInit } from '@angular/core';
import { HadrcodedAuthenticationService } from '../service/hadrcoded-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private hadrcodedAuthenticationService : HadrcodedAuthenticationService) { }

  ngOnInit() {
    this.hadrcodedAuthenticationService.logout();
  }

}
