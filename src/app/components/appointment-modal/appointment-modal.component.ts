import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-appointment-modal',
  templateUrl: './appointment-modal.component.html',
  styleUrls: ['./appointment-modal.component.css']
})
export class AppointmentModalComponent implements OnInit  {

  constructor(private dialogRef: MatDialogRef<AppointmentModalComponent>) {}

  ngOnInit() {
    console.log('Modal component loaded');
  }

  closeModal() {
    this.dialogRef.close();  // This will close the modal
  }
}
