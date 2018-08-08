import {Injectable} from '@angular/core';

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
