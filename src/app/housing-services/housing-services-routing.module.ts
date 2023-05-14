import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HostComunComponent } from './host-comun/host-comun.component';
import { HousingServicesComponent } from './housing-services.component';
import { CanActivateGuard } from './../services/auth.guard';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';
import { ServiceProfileComponent } from './service-profile/service-profile.component';
import { EngCabinetComponent } from './eng-cabinet/eng-cabinet.component';
import { ComunCompanyComponent } from './comun-company/comun-company.component';
import { ComunStatisticsComponent } from './comun-statistics/comun-statistics.component';

const routes: Routes = [
  {
    path: 'housing-services',
    component: HousingServicesComponent,
    children: [
      {
        path: 'host-comun',
        component: HostComunComponent,

        children: [
          { path: '', redirectTo: 'comun-company', pathMatch: 'full' },
          { path: 'payment-history', component: PaymentHistoryComponent, data: { animation: 'payment-history' },},
          { path: 'comun-statistics', component: ComunStatisticsComponent, data: { animation: 'comun-statistics' },},
          {
            path: 'comun-company', component: ComunCompanyComponent,
            children: [
              { path: '', redirectTo: 'eng-cabinet', pathMatch: 'full' },
              { path: 'service-profile', component: ServiceProfileComponent, data: { animation: 'service-profile' },},
              { path: 'eng-cabinet', component: EngCabinetComponent, data: { animation: 'eng-cabinet' },},
            ]
          },
        ]
      },
      { path: '', redirectTo: 'host-comun', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HousingServicesRoutingModule { }
