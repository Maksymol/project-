import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { CanActivateGuard } from '../services/auth.guard';
import { HouseComponent } from './house/house.component';
import { UserComponent } from './user/user.component';
import { ParametersComponent } from './house/parameters/parameters.component';
import { SubscribersComponent } from './house/subscribers/subscribers.component';
import { DocumentsComponent } from './house/documents/documents.component';
import { OrderServicesComponent } from './house/order-services/order-services.component';
import { FurnitureComponent } from './house/furniture/furniture.component';
import { AccessComponent } from './house/access/access.component';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      { path: '', redirectTo: 'house', pathMatch: 'full' },
      {
        path: 'house', component: HouseComponent,
        children: [
          { path: '', redirectTo: 'parameters', pathMatch: 'full' },
          { path: 'parameters', component: ParametersComponent,},
          { path: 'subscribers', component: SubscribersComponent,},
          { path: 'documents', component: DocumentsComponent,},
          { path: 'order-services', component: OrderServicesComponent,},
          { path: 'furniture', component: FurnitureComponent,},
          { path: 'access', component: AccessComponent,},
        ],
      },
      { path: 'user', component: UserComponent,},
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
