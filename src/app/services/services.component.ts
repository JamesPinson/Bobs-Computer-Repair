/**
 * Title: services.component.ts
 * Author: James Pinson
 * Date: 24th July 2021
 * Description: This is the services component ts file.
 */

//Here we call all the imports.
import { Component, OnInit } from '@angular/core';
import { IService } from '../service.interface';
import { ServicesService } from '../services.service';
import { InvoiceComponent } from '../invoice/invoice.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})

//Here we create the items we will use in this component.
export class ServicesComponent implements OnInit {
  services: Array<IService>;
  parts: number;
  hours: number;
  total: number;
  totalWithService: number;

  //Here we call the services with the getServices function.
  constructor(private serviceServices: ServicesService, private dialog: MatDialog) {
    this.services = serviceServices.getServices();
  }

  //Here we create a function to clear the checkboxes.
  clearCheckboxes(): void {
    this.services.forEach((service: IService) => {
      service.checked = false;
    });
  }

  //Here we create a function to clear the input forms.
  clearInputs(): void {
    this.parts = 0;
    this.hours = 0;
  }

  //This is the function to calculate the total services amount.
  calculateTotalServices(): number {
    let totalServices = 0;
    this.services.forEach((service: IService) => {
      if (service.checked) {
        totalServices += service.price;
      }
    });
    return totalServices;
  }

  //This is the function to calculate the service fees.
  calculateServiceFees() {
    const { parts, hours } = this;
    let total = 0;

    if (!!hours) {
      total = this.totalWithService = hours * 50;
    }

    if (!!parts) {
      total = +parts + total;
    }

    this.services.forEach((service) => {
      if (service.checked) {
        total = total + service.price;
      }
    });

    if (!!total) {
      this.total = total;
      this.showInvoice();
    }
  }

  ngOnInit(): void {
  }

  //This is the show invoice function to display everything for the invoice.
  showInvoice() {
    const { services, parts, hours, total, totalWithService } = this;

    const dialogRef = this.dialog.open(InvoiceComponent, {
      data: {
        services: services.filter((service) => service.checked),
        parts,
        hours,
        total,
        totalWithService,
      },
      disableClose: true,
      width: '800px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'confirm') {
        this.clearInputs();
        this.clearCheckboxes();
      }
    });
  }

}
