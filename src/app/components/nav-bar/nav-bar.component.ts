import { Component, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/constants/app-constants';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {

  mobile = AppConstants.Mobile;
  email = AppConstants.Email;
  constructor() { }

  ngOnInit(): void {
  }

}
