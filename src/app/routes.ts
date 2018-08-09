import {Routes} from '@angular/router';
import {HubComponent} from './hub/hub.component';
import {RedirectComponent} from './redirect/redirect.component';
import {EnquiryComponent} from './enquiry/enquiry.component';
import {InitialCardComponent} from './walkthrough/initial-card/initial-card.component';
import {DisabilityPage1Component} from './walkthrough/disability/disability-page1/disability-page1.component';
import {DisabilityPage2Component} from './walkthrough/disability/disability-page2/disability-page2.component';
import {DisabilityPage3Component} from './walkthrough/disability/disability-page3/disability-page3.component';
import {DisabilityPage4Component} from './walkthrough/disability/disability-page4/disability-page4.component';
import {HealthPage1Component} from './walkthrough/health/health-page1/health-page1.component';
import {SmokerQuestionComponent} from './walkthrough/health/smoker-question/smoker-question.component';
import {SmokerInformationComponent} from './walkthrough/health/smoker-information/smoker-information.component';
import {EmergencyInformationComponent} from './walkthrough/health/emergency-information/emergency-information.component';
import {VisionInformationComponent} from './walkthrough/health/vision-information/vision-information.component';
import {GpRegistrationInformationComponent} from './walkthrough/health/gp-registration-information/gp-registration-information.component';
import {DisabilityLastCardComponent} from './walkthrough/disability/disability-last-card/disability-last-card.component';
import {HealthLastCardComponent} from './walkthrough/health/health-last-card/health-last-card.component';

export const appRoutes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/hub'},
  {path: 'index', redirectTo: '/hub'},
  {path: 'hub', component: HubComponent},
  {path: 'redirect', component: RedirectComponent},
  {path: 'enquiry', component: EnquiryComponent},

  {path: 'health', redirectTo: 'walkthrough/health/page1'},
  {path: 'disability', redirectTo: 'walkthrough/disability/page1'},

  {path: 'walkthrough', component: InitialCardComponent},
  {path: 'walkthrough/health/page1', component: HealthPage1Component},
  {path: 'walkthrough/health/smoker-question', component: SmokerQuestionComponent},
  {path: 'walkthrough/health/smoker-information', component: SmokerInformationComponent},
  {path: 'walkthrough/health/emergency-information', component: EmergencyInformationComponent},
  {path: 'walkthrough/health/vision-information', component: VisionInformationComponent},
  {path: 'walkthrough/health/gp-registration-information', component: GpRegistrationInformationComponent},
  {path: 'walkthrough/health/last', component: HealthLastCardComponent},

  {path: 'walkthrough/disability/page1', component: DisabilityPage1Component},
  {path: 'walkthrough/disability/page2', component: DisabilityPage2Component},
  {path: 'walkthrough/disability/page3', component: DisabilityPage3Component},
  {path: 'walkthrough/disability/page4', component: DisabilityPage4Component},
  {path: 'walkthrough/disability/last', component: DisabilityLastCardComponent}
];
