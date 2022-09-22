import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IContact } from 'src/app/models/IContact';
import { IGroup } from 'src/app/models/IGroup';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // public errorMessage: string | null = null;
  public contactForm!: FormGroup;


  // //method for form building and form validations
  formsMethod() {
    this.contactForm = this.formBuilder.group({
      name: ["", Validators.required],
      company: ["", Validators.required],
      email: ["", Validators.required],
      title: ["", Validators.required],
      mobile: ["", Validators.required],
      photo: ["", Validators.required],
      groupId: ["", Validators.required],
    });
  }

  //More properties for adding
  public contact: IContact = {} as IContact;
  public errorMessage: string | null = null;
  // public loading: boolean = false;


  //Constructor starts
  constructor(private contactService: ContactService, 
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.formsMethod();
    this.addCustomer();
  }

  
  // Add row value to edit modal
  edit(row: any){
    this.contactForm.controls['name'].setValue(row.name);
  }




//function for adding contacts
addCustomer() 
{
  if (this.contactForm.valid) {
    this.contactService.createContact(this.contactForm.value).subscribe(
      (res) => {
        alert("Contact added successfully");
        this.contactForm.reset();
        
      },
      (error: any) => {
        this.errorMessage = error;
        console.log(error);
      }
    );
  }
}
}
