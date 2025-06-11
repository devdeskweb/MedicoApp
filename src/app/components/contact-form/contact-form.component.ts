import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contactForm: FormGroup;
  recaptchaToken: string | null = null;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', Validators.required],
      terms: [false, Validators.requiredTrue],
      recaptcha: [null, Validators.required]
    });
  }

  onCaptchaResolved(token: string) {
    this.recaptchaToken = token;
    this.contactForm.patchValue({ recaptcha: token });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form submitted with:', this.contactForm.value);
    }
  }
}
