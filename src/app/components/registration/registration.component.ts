import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FileUploadValidators } from '@iplab/ngx-file-upload';
import { AppService } from 'src/app/services/app/app.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  mainInformation: FormGroup;
  bussinessAddress: FormGroup;
  mailingAddress: FormGroup;
  newbranch:FormGroup;
  public animation: boolean = false;
    public multiple: boolean = true;

    private filesControl = new FormControl(null, FileUploadValidators.filesLimit(2));

    public demoForm = new FormGroup({
        files: this.filesControl
    });
  submitted = false;
  currentStep = 'step1';
  p: number[] = [];
  display1 = "none"
  display2 = "none"
  display3 = "none"
  rows: { id: string; name: string; phone: string; company: string; zip: string; city: string; date: string; country: string; }[];
  constructor(private formBuilder: FormBuilder,
    private appService: AppService) { }

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
    this.newbranch = this.formBuilder.group({
      bussinessAddress1: ['', Validators.required],
      postcode: ['', Validators.required],
      town: ['', Validators.required],
      state: ['', Validators.required],
      url: ['', Validators.required],
    });
    this.rows = this.appService.getData()
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
  saveNewBranch() {
    this.submitted = true;
    if (this.newbranch.invalid) {
      return;
    }
  }
  get f() { return this.mainInformation.controls; }
  get fb() { return this.bussinessAddress.controls; }
  get fbp() { return this.mailingAddress.controls; }
  get fbps() { return this.newbranch.controls; }
  step1() {
    this.currentStep = 'step1'
  }
  step2() {
    this.currentStep = 'step2'
  }
  step2Back() {
    this.currentStep = 'step1'
  }
  step3() {
    this.currentStep = 'step3'
  }
  step3Back() {
    this.currentStep = 'step2'
  }
  step4() {
    this.currentStep = 'step4'
  }
  step4Back() {
    this.currentStep = 'step3'
  }
  step5() {
    this.currentStep = 'step5'
  }
  step5Back() {
    this.currentStep = 'step4'
  }
  openModal2() {
    this.display1 = "block";
  }
  onCloseHandled2() {
    this.display1 = "none";
  }
  openModal3() {
    this.display2 = "block";
  }
  onCloseHandled3() {
    this.display2 = "none";
  }
  openModal4() {
    this.display3 = "block";
  }
  onCloseHandled4() {
    this.display3 = "none";
  }
}
