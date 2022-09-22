import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactManagerComponent } from './components/contact-manager/contact-manager.component';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ViewContactComponent } from './components/view-contact/view-contact.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/contacts/admin' },
  { path: 'contacts/admin', component: ContactManagerComponent },
  { path: 'contacts/list', component: ContactListComponent },
  { path: 'contacts/add', component: AddContactComponent },
  { path: 'contacts/edit/:id', component: AddContactComponent },
  { path: 'contacts/view/:id', component: ViewContactComponent },
  { path: '**', component: PageNotFoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
