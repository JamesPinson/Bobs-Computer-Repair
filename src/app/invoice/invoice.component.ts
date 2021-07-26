/**
 * Title: invoice.component.ts
 * Author: James Pinson
 * Date: 24th July 2021
 * Description: This is the invoice component ts file.
 */

//This is the import statements.
import { Component, OnInit } from '@angular/core';
import { IService } from '../service.interface';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})

//This creates the values for our invoice component.
export class InvoiceComponent implements OnInit {
  today: Date;
  services: Array<IService>;
  parts: number;
  hours: number;
  total: number;
  totalWithService: number;

  //This shows how we want the info the be displayed.
  constructor(private dialogRef: MatDialogRef<InvoiceComponent>, @Inject(MAT_DIALOG_DATA) data: any) {
    const { services, today, parts, hours, total, totalWithService } = data;
    this.today = new Date();
    this.services = services;
    this.parts = parseFloat(parts);
    this.hours = parseFloat(hours);
    this.total = parseFloat(total);
    this.totalWithService = parseFloat(totalWithService);
   }

  ngOnInit(): void {
  }

}
