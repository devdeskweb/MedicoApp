import { Component, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/constants/app-constants';

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"],
})
export class NavBarComponent implements OnInit {
  constructor() {}

  mobile = AppConstants.Mobile;
  email = AppConstants.Email;
  ngOnInit(): void {}
  showPopover = false;

  togglePopover() {
    this.showPopover = !this.showPopover;
  }

  closePopover() {
    this.showPopover = false;
  }
}
