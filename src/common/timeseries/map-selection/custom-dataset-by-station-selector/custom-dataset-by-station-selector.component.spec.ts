import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDatasetByStationSelectorComponent } from './custom-dataset-by-station-selector.component';

describe('CustomDatasetByStationSelectorComponent', () => {
  let component: CustomDatasetByStationSelectorComponent;
  let fixture: ComponentFixture<CustomDatasetByStationSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomDatasetByStationSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDatasetByStationSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
