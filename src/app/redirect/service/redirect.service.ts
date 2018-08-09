import {Injectable} from '@angular/core';

/**
 * This service is used to communicate between the redirect buttons and the redirect component.
 */
@Injectable()
export class RedirectParamsService {
  text: string;
  url: string;
  hasLogin: boolean;
  extraText: string;

  public clear() {
    this.text = undefined;
    this.url = undefined;
    this.hasLogin = undefined;
    this.extraText = undefined;
  }
}
