import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeAccountRoutingModule } from './home-account-routing.module';
import { UserComponent } from './user/user.component';
import { HouseComponent } from './house/house.component';
import { HostAccComponent } from './host-acc/host-acc.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';
import { HomeAccountComponent } from './home-account.component';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    UserComponent,
    HouseComponent,
    HostAccComponent,
    HomeAccountComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    DragDropModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    NgxSpinnerModule,
  ]
})
export class HomeAccountModule { }
