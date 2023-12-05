import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent {

  constructor(private router: Router, private auth:AuthService){}
  homeLogo(){
    this.router.navigate(['todos'])
  }
  logout(){
    this.auth.logout();
  }

}
