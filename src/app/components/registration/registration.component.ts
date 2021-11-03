import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FileUploadValidators } from '@iplab/ngx-file-upload';
import { AppService } from 'src/app/services/app/app.service';
import { RegistrationService } from 'src/app/services/registration/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  mainInformation: FormGroup;
  bussinessAddress: FormGroup;
  mailingAddress: FormGroup;
  newbranch: FormGroup;
  public animation: boolean = false;
  public multiple: boolean = true;

  private filesControl = new FormControl(null, FileUploadValidators.filesLimit(2));

  public demoForm = new FormGroup({
    files: this.filesControl
  });
  submitted = false;
  currentStep = 'step1';
  p: number[] = [];
  total: number;
  isChecked: any
  display1 = "none"
  display2 = "none"
  display3 = "none"
  rows: { id: string; name: string; phone: string; company: string; zip: string; city: string; date: string; country: string; }[];
  allStep3TableData: any;
  step3total: number;
  step3Page: number[] = [];
  AddBussinessCodeModelData = [];
  allStep4TableData: any;
  step4total: number;
  step4Page: number[] = [];
  allStep4AttachmentData: any;
  allStep5FeeData: any;
  totalAmount: number;
  base64result: string;
  constructor(private formBuilder: FormBuilder,
    private appService: AppService,
    private registrationService: RegistrationService) { }

  ngOnInit(): void {
    this.mainInformation = this.formBuilder.group({
      appType: ['', Validators.required],
      busType: ['', Validators.required],
      busName: ['', Validators.required],
      startDate: ['', Validators.required],
      partnerAgreeDate: ['', Validators.required],
      incentive: ['', Validators.required],
      regPeriod: ['', Validators.required],
      busInfo: ['', Validators.required],
      status: ['', Validators.required],
      incubator: ['', Validators.required],
      isOnlineSeller: ['', Validators.required],
    });
    this.bussinessAddress = this.formBuilder.group({
      address: ['', Validators.required],
      postcode: ['', Validators.required],
      town: ['', Validators.required],
      state: ['', Validators.required],
      telephone: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', Validators.required],
      url: ['', Validators.required],
    });
    this.mailingAddress = this.formBuilder.group({
      address: ['', Validators.required],
      postcode: ['', Validators.required],
      town: ['', Validators.required],
      state: ['', Validators.required],
      telephone: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', Validators.required],
    });
    this.newbranch = this.formBuilder.group({
      address: ['', Validators.required],
      postcode: ['', Validators.required],
      town: ['', Validators.required],
      state: ['', Validators.required],
      url: ['', Validators.required],
    });
    this.rows = this.appService.getData()
    this.getStep1Data(1)
    this.getStep2TableData(1, 1, 10)
    this.getStep3TableData(1, 1, 3)
    this.getStep4TableData(1,1,3)
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
    let abc = this.newbranch.value
    abc['appId'] = 1
    let id = 1
    let data = {
      application: {
        appId: 1,
        branches: {
          rows: [
            abc

          ]
        }
      }
    }
    this.registrationService.AddBranchofStep2(id, data).subscribe((response) => {
      this.onCloseHandled2()
      this.getStep2TableData(1,1,10)
    }, (error) => {
      console.log(error)
    })
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
    this.getStep4AttachmentData(1)
  }
  step4Back() {
    this.currentStep = 'step3'
  }
  step5() {
    this.currentStep = 'step5'
    this.getStep5FeeData(1)
  }
  step5Back() {
    this.currentStep = 'step4'
    this.getStep4AttachmentData(1)
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

  getStep1Data(id) {
    this.registrationService.getStep1(id).subscribe((response: any) => {
      console.log('response', response)
      this.mainInformation.patchValue({
        appType: response.application.appType,
        busType: response.application.busType,
        busName: response.application.busName,
        startDate: response.application.startDate,
        partnerAgreeDate: response.application.partnerAgreeDate,
        incentive: response.application.incentive,
        regPeriod: response.application.regPeriod,
        busInfo: response.application.busInfo,
        status: response.application.status,
        incubator: response.application.incubator,
        isOnlineSeller: response.application.isOnlineSeller,
      });
      this.bussinessAddress.patchValue({
        address: response.application.addresses[0].address,
        postcode: response.application.addresses[0].postcode,
        town: response.application.addresses[0].town,
        state: response.application.addresses[0].state,
        telephone: response.application.addresses[0].telephone,
        mobile: response.application.addresses[0].mobile,
        email: response.application.addresses[0].email,
        url: response.application.addresses[0].url,
      });
      this.mailingAddress.patchValue({
        address: response.application.addresses[1].address,
        postcode: response.application.addresses[1].postcode,
        town: response.application.addresses[1].town,
        state: response.application.addresses[1].state,
        telephone: response.application.addresses[1].telephone,
        mobile: response.application.addresses[1].mobile,
        email: response.application.addresses[1].email,
      });
    }, (error) => {
      console.log(error)
    })
  }

  getStep2TableData(id, page, offset) {
    this.registrationService.step2DataTable(id, page, offset).subscribe((response: any) => {
      console.log(response)
      this.rows = response.application.branches.rows
      this.total = response.application.branches.count
      this.p = response.application.branches.page

    }, (error) => {
      console.log(error)
    })

  }
  getPage(page: number) {
    this.getStep2TableData(1, page, 10)
  }

  DeleteBranch(seqNo: number) {
    let id = 1
    this.registrationService.DeleteBranchOfStep2(id, seqNo).subscribe((response) => {
      console.log(response)
      this.getStep2TableData(1, 1, 10)
    }, (error) => {
      console.log(error)
    })
  }

  getStep3TableData(id, page, offset) {
    this.registrationService.step3DataTable(id, page, offset).subscribe((response: any) => {
      console.log('step3', response)
      this.allStep3TableData = response.application.buscodes.rows
      this.step3total = response.application.buscodes.count
      this.step3Page = response.application.buscodes.page

    }, (error) => {
      console.log(error)
    })
  }
  getPageStep3(page: number) {
    this.getStep3TableData(1, page, 3)
  }
  AddBussinessCodeofStep3(item, $event) {
    let event = $event.currentTarget.checked
    let data = item
    if (event) {
      this.AddBussinessCodeModelData.push(data)
    } else {
      this.AddBussinessCodeModelData.forEach((element, index) => {
        if (element.seqno == data.seqno) this.AddBussinessCodeModelData.splice(index, 1);
      });
    }
  }
  AddSelectedCodeofstep3() {
    let data = {
      application: {
        appId: 1,
        buscodes: {
          rows: this.AddBussinessCodeModelData
        }
      }
    }
    let id = 1
    this.registrationService.AddBussinessCodeofStep3(id, data).subscribe((response) => {
      this.onCloseHandled3()
    }, (error) => {
      console.log(error)
    })
  }
  deleteBussinessCodeOfStep3(seqNo:number) {
    let id = 1
    this.registrationService.DeleteBussinessCodeofStep3(id, seqNo).subscribe((response) => {
      console.log(response)
      this.getStep3TableData(1, 1, 3)
    }, (error) => {
      console.log(error)
    })
  }
  getStep4TableData(id, page, offset) {
    this.registrationService.step4DataTable(id, page, offset).subscribe((response: any) => {
      console.log('step4', response)
      this.allStep4TableData = response.application.partners.rows
      this.step4total = response.application.partners.count
      this.step4Page = response.application.partners.page

    }, (error) => {
      console.log(error)
    })
  }
  getPageStep4(page: number) {
    this.getStep4TableData(1, page, 3)
  }
  AddPartnerofstep4() {
    let data = {
      application: {
        appId: 1,
        partners: {
          rows:[]
        }
      }
    }
    let id = 1
    this.registrationService.AddPartnerofStep4(id, data).subscribe((response) => {
      this.onCloseHandled4()
    }, (error) => {
      console.log(error)
    })
  }
  deletePartnerOfStep4(seqNo:number) {
    let id = 1
    this.registrationService.DeletePartnerofStep4(id, seqNo).subscribe((response) => {
      console.log(response)
      this.getStep4TableData(1, 1, 3)
    }, (error) => {
      console.log(error)
    })
  }

  // attachment
  getStep4AttachmentData(id) {
    this.registrationService.step4DataAttachment(id).subscribe((response: any) => {
      console.log('attachment', response)
      this.allStep4AttachmentData = response.application.attachments.rows


    }, (error) => {
      console.log(error)
    })
  }

  AddAttachmentofstep4() {
    let data = {
      attachments: {
        appId: 1,
        buscodes: {
          rows: []
        }
      }
    }
    let id = 1
    this.registrationService.AddAttachmentofStep4(id, data).subscribe((response) => {
      this.onCloseHandled4()
    }, (error) => {
      console.log(error)
    })
  }
  deleteAttachmentOfStep4(fieldId:number) {
    let id = 1
    this.registrationService.DeleteAttachmentofStep4(id, fieldId).subscribe((response) => {
      console.log(response)
      this.getStep4AttachmentData(1)
    }, (error) => {
      console.log(error)
    })
  }
  saveAttachment() {
    console.log('attachment',this.demoForm.value)
    const file: File = this.demoForm.value.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', (event: any) => {
      //let src = reader.result.;
      this.base64result = reader.result.toString().substr(reader.result.toString().indexOf(',') + 1);
      console.log('src',this.base64result)
      console.log('name',file.name)

    });
    let id = 1
    let data = {
      application: {
          appId: 1,
          attachments: {
              rows: [
                  {
                      appId: 1,
                      fileId: 1,
                      fileName: file.name,
                      file:this.base64result ,
                      actionby: 'januah',
                      createdat: null,
                      modifiedat: null,
                      applicationsappid: null,
                      applicationsownersownerid: null
                  }
              ]
          }
      }
  }
    this.registrationService.AddAttachmentofStep4(id,data).subscribe((response)=>{
      console.log(response)
      this.getStep4AttachmentData(1)

    },(error)=>{console.log(error)})

  }
  getStep5FeeData(id) {
    this.registrationService.step5DataTable(id).subscribe((response: any) => {
      console.log('fee', response)
      this.allStep5FeeData = response.application.fees.rows
      this.totalAmount = 0
      this.allStep5FeeData.map(x=>{
       this.totalAmount = this.totalAmount +  x.subTotal
      })


    }, (error) => {
      console.log(error)
    })
  }



}
