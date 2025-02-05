import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ExpertiseserviceService {
  _http:HttpClient;
  profiledetails: any;
  
  getExpertiseList(){
    this._http.get('https://userprofileapp.azurewebsites.net/api/Expertises').subscribe(result=>{
      this.profiledetails=result;
    })
  }

  postContactDetails(expertiseData: any){
    this._http.post('https://userprofileapp.azurewebsites.net/api/Expertises', expertiseData).subscribe(result=>{
      alert('Success');
    })
  }
  constructor(_httpREF:HttpClient,router:ActivatedRoute) {
    this._http = _httpREF;
   }
}

