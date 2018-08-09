import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RedirectParamsService} from '../service/redirect.service';

/**
 * This component displays a redirect button on the page.
 * The redirect button is used only for external urls,
 * and has a distinctive colour for this purpose.
 *
 * If the external url requires student login, or extra notions are
 * given through the inputs of this component, it will redirect to a page
 * where the user is warned about this.
 */
@Component({
  selector: 'app-redirect-button',
  templateUrl: './redirect-button.component.html',
  styleUrls: ['./redirect-button.component.scss']
})
export class RedirectButtonComponent implements OnInit {

  @Input()
  text: string;

  @Input()
  url: string;

  @Input()
  extraText: string;

  @Input()
  hasLogin: boolean;

  constructor(private router: Router, private redirectParams: RedirectParamsService) {
  }

  ngOnInit() {
  }

  @Input()
  buttonClicked() {
    if (this.hasLogin || this.extraText) {
      // Open an intermediate page here
      this.navigateByRouter();
    } else {
      this.redirectParams.clear();

      // There's no reason to have an intermediate page before redirecting to the given url
      // Use assign instead of replace to allow the user to use back button
      window.location.assign(this.url);
    }
  }

  private navigateByRouter() {
    this.copyFieldsToParams();

    // noinspection JSIgnoredPromiseFromCall
    this.router.navigateByUrl('/redirect', {
      skipLocationChange: true, // Skip changing the window location for a more seamless experience
    });
  }

  private copyFieldsToParams() {
    // Copy the parameters over so that the new page will display the correct information
    this.redirectParams.text = this.text;
    this.redirectParams.url = this.url;
    this.redirectParams.hasLogin = this.hasLogin;
    this.redirectParams.extraText = this.extraText;
  }

}
