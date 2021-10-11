import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  mainInformation: FormGroup;
  bussinessAddress: FormGroup;
  mailingAddress: FormGroup;

  submitted = false;
  currentStep = true
  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.mainInformation = this.formBuilder.group({
      applicationType: ['', Validators.required],
      bussinessName: ['', Validators.required],
      incentive: ['', Validators.required],
      businessInfo: ['', Validators.required],
      incubator: ['', Validators.required],
      businessType: ['', Validators.required],
      businessStartDate: ['', Validators.required],
      partnershipAgreementDate: ['', Validators.required],
      registrationPeriod: ['', Validators.required],
      status: ['', Validators.required],
      isOnlineSeller: ['', Validators.required],
    });
    this.bussinessAddress = this.formBuilder.group({
      bussinessAddress1: ['', Validators.required],
      postcode: ['', Validators.required],
      town: ['', Validators.required],
      state: ['', Validators.required],
      telNo: ['', Validators.required],
      mobileNo: ['', Validators.required],
      email: ['', Validators.required],
      url: ['', Validators.required],
    });
    this.mailingAddress = this.formBuilder.group({
      bussinessAddress1: ['', Validators.required],
      postcode: ['', Validators.required],
      town: ['', Validators.required],
      state: ['', Validators.required],
      telNo: ['', Validators.required],
      mobileNo: ['', Validators.required],
      email: ['', Validators.required],
    });
  }
  saveMainInformation() {
    this.submitted = true;
    if (this.mainInformation.invalid) {
      return;
    }
  }
  saveBussinessAddress() {
    this.submitted = true;
    if (this.bussinessAddress.invalid) {
      return;
    }
  }
  saveMailingAddress() {
    this.submitted = true;
    if (this.mailingAddress.invalid) {
      return;
    }
  }
  get f() { return this.mainInformation.controls; }
  get fb() { return this.bussinessAddress.controls; }
  get fbp() { return this.mailingAddress.controls; }
}
