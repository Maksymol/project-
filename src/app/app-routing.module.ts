import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurTeamComponent } from './pages/our-team/our-team.component';
import { InformationUserComponent } from './account-edit/user/information-user.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { TenantsSearchComponent } from './search/tenants-search/tenants-search.component';
import { HousingSearchComponent } from './search/housing-search/housing-search.component';
import { AgreementComponent } from './components/agreement/agreement.component';
import { UserPaymentComponent } from './pages/user-payment/user-payment.component';
import { CanActivateGuard } from './services/auth.guard';
import { ModalComponent } from './pages/modal/modal.component';
import { UserLicenceComponent } from './pages/user-licence/user-licence.component';
import { HousingServicesComponent } from './housing-services/housing-services.component';
import { ComunPageComponent } from './pages/comun-page/comun-page.component';
import { TestComponent } from './pages/test/test.component';
import { HousingParametersComponent } from './account-edit/house/housing-parameters.component';

const routes: Routes = [
  { path: '', redirectTo: 'registration', pathMatch: 'full' },
  { path: 'registration', component: RegistrationComponent },
  { path: 'our-team', component: OurTeamComponent,  },
  { path: 'tenants-search', component: TenantsSearchComponent,  },
  { path: 'housing-search', component: HousingSearchComponent,  },
  { path: 'agreement', component: AgreementComponent,  },
  { path: 'information-user', component: InformationUserComponent,  },
  { path: 'user-payment', component: UserPaymentComponent,  },
  { path: 'modal', component: ModalComponent,  },
  { path: 'user-licence', component: UserLicenceComponent, },
  { path: 'housing-services', component: HousingServicesComponent,  },
  { path: 'comun-page', component: ComunPageComponent,  },
  { path: 'test', component: TestComponent,  },
  { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
  { path: 'housing-parameters', component: HousingParametersComponent,  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
