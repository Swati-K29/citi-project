import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Transaction } from '../models/transaction';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  serviceUrl = '';
  constructor(private http:HttpClient) { }
 
  postFile(fileToUpload:File){
 
    const formData: FormData=new FormData();
    formData.append('file',fileToUpload,fileToUpload.name);
    return this.http.post<Transaction[]>(this.serviceUrl + "/UploadFile",formData);
  }
}
