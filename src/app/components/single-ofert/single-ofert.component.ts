import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LangSwitcherService } from 'src/app/service/lang-switcher.service';
import {
  ISingleContent,
  singleOfferContent,
} from './single-ofert-text-content';

@Component({
  selector: 'app-single-ofert',
  templateUrl: './single-ofert.component.html',
  styleUrls: ['./single-ofert.component.scss'],
})
export class SingleOfertComponent {
  public offertUrl: string | null = null;
  constructor(
    private route: ActivatedRoute,
    public langSwitcher: LangSwitcherService
  ) {
    this.route.queryParamMap.subscribe(
      (query) => (this.offertUrl = query.get('single'))
    );
  }

  get currentOffert(): ISingleContent {
    return singleOfferContent[this.langSwitcher.getCurrentLang][
      this.offertUrl || 'main'
    ];
  }
}
