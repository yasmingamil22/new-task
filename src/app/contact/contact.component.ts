import { Component } from '@angular/core';
import { ContactService } from '../core/services/contact.service';
import { UserData } from '../core/interfaces/user-data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  

  constructor(private _ContactService:ContactService,private _FormBuilder:FormBuilder){}
  //by use FormBulider
  contactForm:FormGroup=this._FormBuilder.group({
    name:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]],
    phone:['',[Validators.required,Validators.pattern(/^01[0125][1-9]{8}$/)]],
  })

  mesError:string=''
  mesOk:string=''



  send():void{
    const userData=this.contactForm.value;

    if(this.contactForm.valid ==true){
      this._ContactService.contactUs(userData).subscribe({
        next:(response)=>{

          this.mesOk=response.message
 
         console.log(response)

         
        

 
       
       },
       error:(err)=>{
        console.log("err")

       console.log(err)
       this.mesError=err.error.errors[0].msg;
 
       }
     })
 
    }
  }



   

}
