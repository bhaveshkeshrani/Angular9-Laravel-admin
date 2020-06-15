import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { ApiService } from '../api.service';
import {NgForm} from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactsComponent implements OnInit {
    // contacts = [
    //   {"fullname": "Bhavesh Kesharani", "email": "bhaveshkeshrani10@gmail.com", "phone": "+911234567892", "location": "Ahmedabad", "website": "www.mycodexpert.com"},
    //   {"fullname": "Christian Yeates", "email": "christian.yeates@test.com", "phone": "+441234567893", "location": "Caerphilly", "website": "www.instagram.com"},
    //   {"fullname": "Vijay Patel", "email": "vijaypatel@gmail.com", "phone": "+911234987654", "location": "London", "website": "www.google.com"},
    //   {"fullname": "Nirmal Patel", "email": "nirmalpatel@gmail.com", "phone": "+917878745455", "location": "Bhuj", "website": "www.facebook.com"},
    //   {"fullname": "Anil ambani", "email": "anilambani@test.com", "phone": "+911234987654", "location": "Mumbai", "website": "www.relience.com"},
    //   {"fullname": "Sundar Pichai", "email": "sundarpichai@test.com", "phone": "+17878745455", "location": "Chennai", "website": "www.google.com"},
    // ];
    // closeResult = '';
    fullname: string = '';
    email: string = '';
    phone: string = '';
    contacts: any = [];
    constructor(private api: ApiService,private modalService: NgbModal) {}
    ngOnInit() {
      // this.fullname = 'bhavesh';
      // this.email = 'bhaveshkeshrani10@gmail.com';
      // this.phone = '123456789';
      this.api.getContacts()
        .subscribe(data => {
          for (const d of (data as any)) {
            this.contacts.push({
              id: d.id,
              name: d.name,
              email: d.email,
              phone: d.phone,
              createdDate: d.createdDate,
            });
          }
        });
    }
    viewContacts(data)
    {
      console.log(data);
    }
    editContacts(data)
    {
      console.log(data);
    }

    open(content:any,contact:any) {
      this.fullname = contact.name;
      this.email = contact.email;
      this.phone = contact.phone;
      // console.log(contact);
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    }
    onSubmit() {
      // alert(this.fullname)
      let contact = {
        'fullname': this.fullname,
        'email': this.email,
        'phone': this.phone
       }
      //  console.log(contact);
      this.api.saveContact(contact)
      .subscribe(data => console.log(data), error => console.log(error));
      // this.api.saveContact(contact);
      return false;
    }
}