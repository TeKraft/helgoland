import { AfterViewInit, Component, Input } from '@angular/core';
import { MapCache } from '@helgoland/map';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MapOptions } from 'leaflet';

@Component({
  selector: 'n52-modal-geometry-viewer',
  templateUrl: './modal-geometry-viewer.component.html',
  styleUrls: ['./modal-geometry-viewer.component.scss']
})
export class ModalGeometryViewerComponent implements AfterViewInit {

  public mapId = 'mapGeometryViewerModal';

  public mapOptions: MapOptions = { zoom: 12 };

  @Input()
  public geometry: GeoJSON.GeoJsonObject;

  constructor(
    public activeModal: NgbActiveModal,
    public mapCache: MapCache
  ) { }

  public ngAfterViewInit(): void {
    window.setTimeout(() => this.mapCache.getMap(this.mapId).invalidateSize(), 10);
  }

}
