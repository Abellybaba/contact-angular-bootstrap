import { Component, OnInit } from '@angular/core';
import { IContact } from 'src/app/models/IContact';
import { ContactService } from 'src/app/services/contact.service';
import { from, Observable } from 'rxjs';



@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})

export class ContactManagerComponent implements OnInit {
  public loading: boolean = false;
  public contacts: IContact[] = [];
  public errorMessage: string | null = null; 




  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
   // this.loading = true;
      this.onGetContacts();
  }

//Functions http requests to get all contacts
onGetContacts(): void{
 // this.loading = true;
    this.contactService.getAllContacts().subscribe((res)=>{
      this.contacts = res;
     // this.loading = false;
      console.log(res)},
      (error: any) => {
      this.errorMessage = error;
        console.log(error)
       // this.loading = false;
    })
}

deleteContact(){
  // this.loading = true;
  // this.contacService.deleteContact().
}


}


