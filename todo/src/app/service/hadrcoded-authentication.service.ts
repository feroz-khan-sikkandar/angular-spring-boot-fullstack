import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HadrcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
     console.log('before ' + this.isUserLoggedIn());
    if(username==="feroz" && password === 'khan') {
      sessionStorage.setItem('authenticaterUser', username);
      console.log('after ' + this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticaterUser')
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('authenticaterUser')
  }
}
