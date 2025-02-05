import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contactme',
  imports: [FormsModule],
  templateUrl: './contactme.component.html',
  styleUrl: './contactme.component.css'
})
export class ContactmeComponent {
    _contactSer: ContactService;

 
  constructor(private route: ActivatedRoute,contactSerREF:ContactService) {
    this._contactSer = contactSerREF;
  }
  AddContact(formObj:any){
    this._contactSer.postContactDetails({name:formObj.value.name, email:formObj.value.email,
        phoneNo:formObj.value.phoneNo, message:formObj.value.message})
  }
} 
