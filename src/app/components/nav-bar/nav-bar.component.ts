import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"],
})
export class NavBarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  showPopover = false;

  togglePopover() {
    this.showPopover = !this.showPopover;
  }

  closePopover() {
    this.showPopover = false;
  }
}
