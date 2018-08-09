import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RedirectParamsService} from './service/redirect.service';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss']
})
export class RedirectComponent {

  // Contents of the button
  @Input()
  private _text: string;

  // Url that the button points at
  @Input()
  private _url: string;

  // Whether the page requires the user to login with their student account
  @Input()
  private _hasLogin: boolean;

  // Extra notion(s)
  @Input()
  private _extraText: string;

  /*
  The RedirectComponent can be instantiated by the router and by selector.
  In both cases, parameters are passed in a different way. The prior uses the
  service as a constructor parameter, the latter uses @Input().

  The below getters serve to unify the different methods.
  The problem is that the fields can't simply be assigned to the service its
  fields on construction, as the data would not be updated.
   */

  get text(): string {
    return RedirectComponent.pickAnyDefinedValue(this._text, this.params.text);
  }

  get url(): string {
    return RedirectComponent.pickAnyDefinedValue(this._url, this.params.url);
  }

  get hasLogin(): boolean {
    return RedirectComponent.pickAnyDefinedValue(this._hasLogin, this.params.hasLogin);
  }

  get extraText(): string {
    return RedirectComponent.pickAnyDefinedValue(this._extraText, this.params.extraText);
  }

  constructor(public params: RedirectParamsService) {
  }

  private static pickAnyDefinedValue(value1, value2) {
    if (value1 === undefined) return value2;
    return value1;
  }

}
