import { Component } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  longText = `Welcome to Car-Lelo, the online destination for car shoppers looking to purchase their next vehicle.  `;

  logindetails=this.login.loggedin;

constructor( private login:LoginService){}



}
