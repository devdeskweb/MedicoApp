import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { AppConstants } from 'src/app/constants/app-constants';

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"],
})
export class NavBarComponent implements OnInit {
  constructor(public router: Router) {}
  canHide: boolean = false;
  mobile = AppConstants.Mobile;
  email = AppConstants.Email;

  private routerSubscription!: Subscription;
  
  ngOnInit(): void {
    this.updateCanHide(); // initial check
    
    this.routerSubscription = this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => {
      this.updateCanHide(); // update on route change
    });
    this.canHide = this.router.url === '/home' && window.innerWidth < 768;
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => this.closePopover());
  }
  showPopover = false;

  @HostListener('window:resize', [])
  onResize() {
    this.updateCanHide(); // update on screen resize
  }

  updateCanHide() {
    this.canHide = this.router.url === '/home' && window.innerWidth < 768;
  }

  ngOnDestroy(): void {
    this.routerSubscription?.unsubscribe();
  }

  togglePopover() {
    this.showPopover = !this.showPopover;
  }

  closePopover() {
    this.showPopover = false;
  }
}
