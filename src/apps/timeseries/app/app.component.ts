import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { Component, ViewEncapsulation } from '@angular/core';
import { Language, Settings, SettingsService } from '@helgoland/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'n52-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  public languageList: Language[];

  constructor(
    translate: TranslateService,
    settings: SettingsService<Settings>
  ) {
    translate.setDefaultLang('en');
    translate.use('de');

    // necessary to load information on e.g. what 'medium' date format should look like in German etc.
    registerLocaleData(localeDe);

    this.languageList = settings.getSettings().languages;
  }
}
