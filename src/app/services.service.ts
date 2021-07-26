/**
 * Title: services.service.ts
 * Author: James Pinson
 * Date: 24th July 2021
 * Description: This is the services service.
 */

//Here we have the imports that we will use.
import { Injectable } from '@angular/core';
import { IService } from './service.interface';

@Injectable({
  providedIn: 'root'
})

//We create our service array and add in each service.
export class ServicesService {
  services: Array<IService>;

  constructor() {
    this.services = [
      {
        name: 'Password Reset',
        price: 39.99,
        checked: false,
      },
      {
        name: 'Spyware Removal',
        price: 99.99,
        checked: false,
      },
      {
        name: 'Ram Upgrade',
        price: 129.99,
        checked: false,
      },
      {
        name: 'Software Installation',
        price: 49.99,
        checked: false,
      },
      {
        name: 'Tune-Up',
        price: 89.99,
        checked: false,
      },
      {
        name: 'Keyboard Cleaning',
        price: 45.00,
        checked: false,
      },
      {
        name: 'Disk Clean-up',
        price: 149.99,
        checked: false,
      },
    ];
  }

  //This is our function to return all of our services.
  getServices() {
    return this.services;
  }
}
