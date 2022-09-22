import { Component, OnInit } from '@angular/core';
import { IContact } from 'src/app/models/IContact';
import { ContactService } from 'src/app/services/contact.service';
import { from, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  public loading: boolean = false;
  public contactData: IContact[] = [];
  public errorMessage: string | null = null; 

  constructor(private contactService: ContactService,
              private _router: Router) { }

  ngOnInit(): void {
   this.getListOfContacts();
  }
  getListOfContacts(){
    this.contactService.getAllContacts().subscribe((res)=>{
      this.contactData = res;
      console.log(res);
    })
  }
  deleteContact(row: any){
    return this.contactService.deleteContact(row.id).subscribe(res=>
      {
      alert('Contact deleted');
      this.getListOfContacts();
    })
  }
  editContact(Id: any){
    this._router.navigate(['contacts/edit', Id]);

  }


}
