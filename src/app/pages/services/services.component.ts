import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { firstValueFrom } from 'rxjs';
import { AppointmentModalComponent } from 'src/app/components/appointment-modal/appointment-modal.component';
import { AppConstants } from 'src/app/constants/app-constants';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  mobile = AppConstants.Mobile;
  constructor(private title: Title, private dialog: MatDialog) {
    this.title.setTitle('Services')
  }

  ngOnInit(): void {
  }

  async onBookAnAppointmentBtnClick(){
    const result = await firstValueFrom(
      this.dialog.open(AppointmentModalComponent).afterClosed()
    );
  }

}
