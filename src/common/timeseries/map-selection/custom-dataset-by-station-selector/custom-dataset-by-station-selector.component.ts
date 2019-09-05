import { Component } from '@angular/core';
import { DatasetByStationSelectorComponent } from '@helgoland/selector';

@Component({
  selector: 'n52-custom-dataset-by-station-selector',
  templateUrl: './custom-dataset-by-station-selector.component.html',
  styleUrls: ['./custom-dataset-by-station-selector.component.scss']
})
export class CustomDatasetByStationSelectorComponent extends DatasetByStationSelectorComponent { }
