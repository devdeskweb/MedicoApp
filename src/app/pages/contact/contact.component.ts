import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { firstValueFrom } from 'rxjs';
import { AppointmentModalComponent } from 'src/app/components/appointment-modal/appointment-modal.component';
import { AppConstants } from 'src/app/constants/app-constants';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  mobile = AppConstants.Mobile;
  
  constructor(private title: Title, private dialog: MatDialog) {
    this.title.setTitle('Contact')
  }

  ngOnInit(): void {
  }

  async onBookAnAppointmentBtnClick(){
    const result = await firstValueFrom(
      this.dialog.open(AppointmentModalComponent).afterClosed()
    );
  }
}
