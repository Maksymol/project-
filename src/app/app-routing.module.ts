import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgreementComponent } from './agreement/agreement.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { HomeAccountComponent } from './payments/home-account/home-account.component';
import { HousingSearchComponent } from './payments/housing-search/housing-search.component';
import { PaymentsComponent } from './payments/payments.component';
import { SearchComponent } from './payments/search/search.component';
import { InformationHousingComponent } from './registration/information-housing/information-housing.component';
import { RegistrationComponent } from './registration/registration.component';
import { CleaningComponent } from './services/cleaning/cleaning.component';
import { EnergyComponent } from './services/energy/energy.component';
import { GasComponent } from './services/gas/gas.component';
import { InternetComponent } from './services/internet/internet.component';
import { ServicesComponent } from './services/services.component';
import { WaterComponent } from './services/water/water.component';
import { TestComponent } from './style/test/test.component';

const routes: Routes = [
  {path: '' , redirectTo: 'registration' , pathMatch: 'full' },
  {path: 'registration' , component: RegistrationComponent},
  {path: 'payments' , component: PaymentsComponent},
  {path: 'services' , component: ServicesComponent},
  {path: 'energy' , component: EnergyComponent},
  {path: 'water' , component: WaterComponent},
  {path: 'cleaning' , component: CleaningComponent},
  {path: 'gas' , component: GasComponent},
  {path: 'internet' , component: InternetComponent},
  {path: 'home-account' , component: HomeAccountComponent},
  {path: 'our-team' , component: OurTeamComponent},
  {path: 'information-housing' , component: InformationHousingComponent},
  {path: 'test' , component: TestComponent},
  {path: 'search' , component: SearchComponent},
  {path: 'housing-search' , component: HousingSearchComponent},
  {path: 'agreement' , component: AgreementComponent},
  {path: 'agree' , component: AgreementComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
