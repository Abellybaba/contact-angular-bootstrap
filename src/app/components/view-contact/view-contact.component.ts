
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, Subscription } from 'rxjs';
import { IContact } from 'src/app/models/IContact';
import { ContactService } from 'src/app/services/contact.service';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {

   public contactId: string | null = null
   contact: IContact | undefined;
   
  // public loading: boolean = false;
  // public contact: IContact = IContact;
  // public errorMessage: string | null = null

  constructor(private activatedRoute: ActivatedRoute,
    private contactService: ContactService) { }

  ngOnInit(): void {
    
    // this.sub = this.activatedRoute.params.subscribe(params =>{
    //   this.contactId = params['id']
    //   this.contactService.getContact(this.contactId).pipe(
    //     map((contact:IContact)=>this.contact = contact)).subscribe()
    // })
    //  this.activatedRoute.paramMap.subscribe((param: ParamMap)=>{
    //  this.contactId = param.get('id');
    //  });
  // if (this.contactId) {
  //   this.loading = true;
  //  this.contactService.getContact(this.contactId).subscribe((data)=>{
  //    this.contact = data;
  //    this.loading = false;
  //   }, (error) => {
  //     this.errorMessage = error;
  //   this.loading = false;
  //  });
  // }
 
  }
  


  // public isNotEmpty(){
  //   return Object.keys(this.contact).length > 0;
  // }

    // ngOnDestroy(): void {
    //   this.sub.unsubscribe();
      
    // }
  

}

  