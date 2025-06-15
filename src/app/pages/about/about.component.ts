import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'
import { MatDialog } from '@angular/material/dialog'
import { firstValueFrom } from 'rxjs'
import { AppointmentModalComponent } from 'src/app/components/appointment-modal/appointment-modal.component';
import { AppConstants } from 'src/app/constants/app-constants';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  mobile = AppConstants.Mobile;
  
  constructor(private title: Title, private dialog: MatDialog) {
    this.title.setTitle('About')
  }

  ngOnInit(): void {
  }

  async onBookAnAppointmentBtnClick(){
    const result = await firstValueFrom(
      this.dialog.open(AppointmentModalComponent).afterClosed()
    );
  }

}
