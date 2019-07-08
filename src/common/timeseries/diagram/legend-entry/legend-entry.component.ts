import { Component, SimpleChanges, OnChanges, OnInit } from '@angular/core';
import { Timespan } from '@helgoland/core';
import { TimeseriesEntryComponent } from '@helgoland/depiction';
import { LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'n52-legend-entry',
  templateUrl: './legend-entry.component.html',
  styleUrls: ['./legend-entry.component.scss']
})
export class LegendEntryComponent extends TimeseriesEntryComponent implements OnInit, OnChanges {

  public timeInterval: Timespan;
  public isCollapsed: Boolean = true;

  public ngOnInit(): void {
    super.ngOnInit();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    super.ngOnChanges(changes);
    this.translateSrvc.onLangChange.subscribe((langChangeEvent: LangChangeEvent) => this.onLanguageChanged(langChangeEvent));
  }

  protected onLanguageChanged(langChangeEvent: LangChangeEvent): void {
    if (this.internalId) {
      this.loadDataset(langChangeEvent.lang);
    }
  }
}
