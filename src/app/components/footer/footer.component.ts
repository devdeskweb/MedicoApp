import { Component, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/constants/app-constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  mobile = AppConstants.Mobile;
  email = AppConstants.Email;
  constructor() { }

  ngOnInit(): void {
  }

}
