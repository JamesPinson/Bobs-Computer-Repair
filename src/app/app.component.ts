/**
 * Title: app.component.ts
 * Author: James Pinson
 * Date: 24th July 2021
 * Description: This is the app component ts file.
 */

//This is our import statements.
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//This is where we export our class component which contains our title.
export class AppComponent {
  title = 'bobs-computer-repair';
}
