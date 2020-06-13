import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactsComponent implements OnInit {
    contacts = [
      {"fullname": "Bhavesh Kesharani", "email": "bhaveshkeshrani10@gmail.com", "phone": "+911234567892", "location": "Ahmedabad", "website": "www.mycodexpert.com"},
      {"fullname": "Christian Yeates", "email": "christian.yeates@test.com", "phone": "+441234567893", "location": "Caerphilly", "website": "www.instagram.com"},
      {"fullname": "Vijay Patel", "email": "vijaypatel@gmail.com", "phone": "+911234987654", "location": "London", "website": "www.google.com"},
      {"fullname": "Nirmal Patel", "email": "nirmalpatel@gmail.com", "phone": "+917878745455", "location": "Bhuj", "website": "www.facebook.com"},
      {"fullname": "Anil ambani", "email": "anilambani@test.com", "phone": "+911234987654", "location": "Mumbai", "website": "www.relience.com"},
      {"fullname": "Sundar Pichai", "email": "sundarpichai@test.com", "phone": "+17878745455", "location": "Chennai", "website": "www.google.com"},
    ];

    constructor() { }
    ngOnInit() {}
}
