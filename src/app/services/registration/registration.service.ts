import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private httpClient: HttpClient) { }
  url = 'https://ssm-api.amastsales.com/application/query/main'
  dataTable = 'https://ssm-api.amastsales.com/application/query/branch'
  step3Table = 'https://ssm-api.amastsales.com/application/query/buscode'
  addBranch = 'https://ssm-api.amastsales.com/application/create/branch'
  addBussinessCode = 'https://ssm-api.amastsales.com/application/create/buscode'
  deleteBranch = 'https://ssm-api.amastsales.com/application/delete/branch'
  deleteBussiness='https://ssm-api.amastsales.com/application/delete/buscode'
  step4Table='https://ssm-api.amastsales.com/application/query/partner'
  addPartner='https://ssm-api.amastsales.com/application/create/partner'
  deletePartner='https://ssm-api.amastsales.com/application/delete/partner'
  step4Attachment='https://ssm-api.amastsales.com/application/query/attachment'
  addAttachment='https://ssm-api.amastsales.com/application/create/attachment'
  deleteAttachment='https://ssm-api.amastsales.com/application/delete/attachment'
  step4Fee='https://ssm-api.amastsales.com/application/query/fee'
  getStep1(id) {
    return this.httpClient.get(`${this.url}?appId=${id}`)
  }
  step2DataTable(id,page,offset) {
    return this.httpClient.get(`${this.dataTable}?appId=${id}&page=${page}&offset=${offset}`)
  }
  AddBranchofStep2(id,data) {
    return this.httpClient.post(`${this.addBranch}?appId=${id}`,data)
  }
  DeleteBranchOfStep2(id,seqNo) {
    return this.httpClient.delete(`${this.deleteBranch}?appId=${id}&seqNo=${seqNo}`)
  }
  step3DataTable(id,page,offset) {
    return this.httpClient.get(`${this.step3Table}?appId=${id}&page=${page}&offset=${offset}`)
  }
  AddBussinessCodeofStep3(id,data) {
    return this.httpClient.post(`${this.addBussinessCode}?appId=${id}`,data)
  }
  DeleteBussinessCodeofStep3(id,seqNo) {
    return this.httpClient.delete(`${this.deleteBussiness}?appId=${id}&seqNo=${seqNo}`)
  }
  step4DataTable(id,page,offset) {
    return this.httpClient.get(`${this.step4Table}?appId=${id}&page=${page}&offset=${offset}`)
  }
  AddPartnerofStep4(id,data) {
    return this.httpClient.post(`${this.addPartner}?appId=${id}`,data)
  }
  DeletePartnerofStep4(id,seqNo) {
    return this.httpClient.delete(`${this.deletePartner}?appId=${id}&seqNo=${seqNo}`)
  }
  step4DataAttachment(id) {
    return this.httpClient.get(`${this.step4Attachment}?appId=${id}`)
  }
  AddAttachmentofStep4(id,data) {
    return this.httpClient.post(`${this.addAttachment}?appId=${id}`,data)
  }
  DeleteAttachmentofStep4(id,seqNo) {
    return this.httpClient.delete(`${this.deleteAttachment}?appId=${id}&fileId=${seqNo}`)
  }
  step5DataTable(id) {
    return this.httpClient.get(`${this.step4Fee}?appId=${id}`)
  }
}
