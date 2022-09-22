import { IContact } from "./../../models/IContact";
import { Component, OnInit } from "@angular/core";
import { IGroup } from "src/app/models/IGroup";
import { ContactService } from "src/app/services/contact.service";
import { from, Observable } from "rxjs";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-add-contact",
  templateUrl: "./add-contact.component.html",
  styleUrls: ["./add-contact.component.css"],
})
export class AddContactComponent implements OnInit {
  public contactForm!: FormGroup;
  public groupOptions: string[] = [
    "Family",
    "Friends",
    "Colleague",
    "Community",
    "Social",
    "Service",
  ];

  //method for form building and form validations
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

  public contact: IContact = {} as IContact;
  public errorMessage: string | null = null;
  // public loading: boolean = false;
  public groups: IGroup[] = [] as IGroup[];

  constructor(
    private contactService: ContactService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.formsMethod();
    this.addContact();
    this.activatedRoute.paramMap.subscribe(
      params => {const contId = params.get('id');
      this.getEContact(contId);
    
    })
  }

  //methods for getting contacts for edit purpose
  getEContact(id: any){
    this.contactService.getContact(id).subscribe(
      (contact: IContact)=> this.editContact(contact),
      (error: any) => console.log(error)
    );
  }

  //method for binding object to add
  editContact(contact: IContact){
    this.contactForm.setValue({
       
      name: contact.name,
      company: contact.company,
      email: contact.email,
      title: contact.title,
      mobile: contact.mobile,
      photo: contact.photo,
      groupId: contact.groupId,
    });
  }

  //function for adding contacts
  addContact() 
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
