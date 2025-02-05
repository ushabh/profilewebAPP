import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  _http:HttpClient;
   contactdetails: any;
  
  getContactDetails(){
    this._http.get('https://userprofileapp.azurewebsites.net/api/ContactRequests').subscribe(result=>{
      this.contactdetails=result;
    })
  }

  postContactDetails(contactData: any){
    this._http.post('https://userprofileapp.azurewebsites.net/api/ContactRequests', contactData).subscribe(result=>{
      alert('Success');

      const emailNotificationUrl = 'https://emailnotifyapp-usha.azurewebsites.net/api/HttpTriggerEmail?';
      this._http.post(emailNotificationUrl, contactData)
        .subscribe(emailResult => {
          console.log('Email notification sent successfully', emailResult);
        }, error => {
          console.error('Failed to send email notification', error);
        });
    }, error => {
      console.error('Failed to post contact details', error);
    });
  }

  constructor(_httpREF:HttpClient,router:ActivatedRoute) {
    this._http = _httpREF;
   }
}