import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatIconRegistry} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';

import {appRoutes} from './routes';
import {MaterialModule} from './material';
import {HistoryService} from './history/history.service';
import {RedirectParamsService} from './redirect/service/redirect.service';

import {HubComponent} from './hub/hub.component';
import {HubCardComponent} from './hub/hub-card/hub-card.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {RedirectComponent} from './redirect/redirect.component';
import {RedirectButtonComponent} from './redirect/redirect-button/redirect-button.component';
import {EnquiryComponent} from './enquiry/enquiry.component';

import {QuestionComponent} from './walkthrough/question/question.component';
import {InformationComponent} from './walkthrough/information/information.component';

import {InitialCardComponent} from './walkthrough/initial-card/initial-card.component';
import {DisabilityPage1Component} from './walkthrough/disability/disability-page1/disability-page1.component';
import {DisabilityPage2Component} from './walkthrough/disability/disability-page2/disability-page2.component';
import {DisabilityPage3Component} from './walkthrough/disability/disability-page3/disability-page3.component';
import {DisabilityPage4Component} from './walkthrough/disability/disability-page4/disability-page4.component';
import {HealthPage1Component} from './walkthrough/health/health-page1/health-page1.component';
import {SmokerQuestionComponent} from './walkthrough/health/smoker-question/smoker-question.component';
import {SmokerInformationComponent} from './walkthrough/health/smoker-information/smoker-information.component';
import {VisionInformationComponent} from './walkthrough/health/vision-information/vision-information.component';
import {EmergencyInformationComponent} from './walkthrough/health/emergency-information/emergency-information.component';
import {GpRegistrationInformationComponent} from './walkthrough/health/gp-registration-information/gp-registration-information.component';
import {WalkthroughStackService} from './walkthrough/walkthrough-stack.service';
import {HealthLastCardComponent} from './walkthrough/health/health-last-card/health-last-card.component';
import {DisabilityLastCardComponent} from './walkthrough/disability/disability-last-card/disability-last-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    RedirectComponent,
    RedirectButtonComponent,
    HubComponent,
    HubCardComponent,
    QuestionComponent,
    InformationComponent,
    EnquiryComponent,

    InitialCardComponent,
    DisabilityPage1Component,
    DisabilityPage2Component,
    DisabilityPage3Component,
    DisabilityPage4Component,
    HealthPage1Component,
    SmokerQuestionComponent,
    SmokerInformationComponent,
    VisionInformationComponent,
    EmergencyInformationComponent,
    GpRegistrationInformationComponent,
    HealthLastCardComponent,
    DisabilityLastCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule,
    HttpClientModule
  ],
  providers: [
    RedirectParamsService,
    HistoryService,
    WalkthroughStackService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(routingState: HistoryService,
              matIconRegistry: MatIconRegistry,
              domSanitizer: DomSanitizer) {
    // Subscribe to the router events on load
    routingState.loadRouting();

    // Register material icon set
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('/assets/mdi.svg'));


  }

}
