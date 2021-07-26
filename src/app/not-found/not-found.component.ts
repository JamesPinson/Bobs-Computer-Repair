/**
 * Title: not-found.component.ts
 * Author: James Pinson
 * Date: 24th July 2021
 * Description: This is the not-found component ts file.
 */

//This is the import statements.
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})

//This is where we export the component.
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
