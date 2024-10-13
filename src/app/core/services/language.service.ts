import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({ providedIn: 'root' })
export class LanguageService {

  public languages: string[] = ['ch','en','fr','gr','it','ru','sa','sp'];

  constructor(public translate: TranslateService, private cookieService: CookieService) {

    let browserLang:any;
    /**
     * cookie Language Get
    */
    this.cookieService.set('lang', 'en');
    this.translate.addLangs(this.languages);
    if (this.cookieService.check('lang')) {
      browserLang = this.cookieService.get('lang');
    }
    else {
      browserLang = translate.getBrowserLang();
    }
    translate.use(browserLang.match(/ch|en|fr|gr|it|ru|sa|sp/) ? browserLang : 'en');
  }

  /**
   * Cookie Language set
   */
  public setLanguage(lang: any) {
    this.translate.use(lang);
    this.cookieService.set('lang', lang);
  }

}
