/**
 * Title: home.component.ts
 * Author: James Pinson
 * Date: 24th July 2021
 * Description: This is the home component ts file.
 */

//This is the import statements.
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

//This exports the home component.
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
