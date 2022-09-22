import { IContact } from './../models/IContact';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import {range, Observable} from 'rxjs';
import { catchError, Observable, throwError } from 'rxjs';
import { IGroup } from '../models/IGroup';





@Injectable({
  providedIn: 'root'
})
export class ContactService {
  
  
  //Define base url for server
  private serverUrl: string = "https://my-json-server.typicode.com/abellybaba/contact-json-api"; //server url Server/db.json

  constructor(private httpClient: HttpClient) { }


  
  //Get all contacts
  public getAllContacts(): Observable<IContact[]>{
     let dataUrl: string = `${this.serverUrl}/contacts`;
     return this.httpClient.get<IContact[]>(dataUrl).pipe(catchError(this.handleError));
   
  }


// //Get single contact
 getContact(id: string):Observable<IContact>{
let dataUrl: string = `${this.serverUrl}/contacts/${id}`;
return this.httpClient.get<IContact>(this.serverUrl).pipe(catchError(this.handleError));
 }

// //creating a contact with post
public createContact(contact: IContact):Observable<IContact>{
let dataUrl: string = `${this.serverUrl}/contacts`;
return this.httpClient.post<IContact>(dataUrl, contact).pipe(catchError(this.handleError));
 }


 //update contact
 public updateContact(contact: IContact, id: string):Observable<IContact>{
   let dataUrl: string = `${this.serverUrl}/contacts/${id}`;
   return this.httpClient.put<IContact>(dataUrl, contact).pipe(catchError(this.handleError));
 }

 //delete contact
 public deleteContact(id: string):Observable<{}>{
   let dataUrl: string = `${this.serverUrl}/contacts/${id}`;
   return this.httpClient.delete<{}>(dataUrl).pipe(catchError(this.handleError));
}

//Getting all the groups
public getAllGroups(): Observable<IGroup[]>{
  let dataUrl: string = `${this.serverUrl}/groups`;
  return this.httpClient.get<IGroup[]>(dataUrl).pipe(catchError(this.handleError));

}



// //Get single contact
public getGroup(contact: IContact):Observable<IGroup>{
  let dataUrl: string = `${this.serverUrl}/contacts/${contact.groupId}`;
  return this.httpClient.get<IGroup>(this.serverUrl).pipe(catchError(this.handleError));
   }




//Error Handling
public handleError(error: HttpErrorResponse){
  let errorMessage: string = '';
  if (error.error instanceof ErrorEvent) {
    //client Error
    errorMessage = `Error : ${error.error.message}`;
  }else{
    //server error
    errorMessage = `${error.status} \n Message: ${error.status}`;
  }
  return throwError(errorMessage);
}

}
