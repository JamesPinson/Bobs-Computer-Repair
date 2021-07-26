/**
 * Title: app-routing.module.ts
 * Author: James Pinson
 * Date: 24th July 2021
 * Description: This is the app routing module.
 */

//Here we have all the import statements.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { NotFoundComponent } from './not-found/not-found.component';

//We have routes for our home page, services page, and 404 error page.
const routes: Routes = [
  { path: '',
    component: HomeComponent
  },
  { path: 'home',
    component: HomeComponent
  },
  { path: 'services',
    component: ServicesComponent
  },
  { path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

//Here we export the routing module.
export class AppRoutingModule { }
