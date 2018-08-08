import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatIconRegistry} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';

import {RedirectComponent} from './redirect/redirect.component';
import {RedirectButtonComponent} from './redirect/redirect-button/redirect-button.component';
import {DisabilityComponent} from './disability/disability.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {MaterialModule} from './material';
import {HubComponent} from './hub/hub.component';
import {HubCardComponent} from './hub/hub-card/hub-card.component';
import {RedirectParamsService} from './redirect/service/redirect.service';
import {HistoryService} from './history/history.service';
import {QuestionComponent} from './walkthrough/question/question.component';
import {QuestionService} from './walkthrough/question/question.service';

const appRoutes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'hub'},
  {path: 'index', redirectTo: 'hub'},
  {path: 'hub', component: HubComponent},
  {path: 'redirect', component: RedirectComponent},
  {path: 'disability', component: DisabilityComponent},
  {path: 'question/:name', component: QuestionComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    RedirectComponent,
    RedirectButtonComponent,
    DisabilityComponent,
    HubComponent,
    HubCardComponent,
    QuestionComponent
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
    QuestionService
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
