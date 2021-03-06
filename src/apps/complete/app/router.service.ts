import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { TimeseriesRouter } from '../../../common/timeseries/services/timeseries-router.service';

@Injectable()
export class CustomTimeseriesRouter extends TimeseriesRouter {

    constructor(
        private router: Router
    ) {
        super();
    }

    public navigateToDiagram(): void {
        this.router.navigate(['timeseries/diagram']);
    }

    public navigateToMapSelection(): void {
        this.router.navigate(['timeseries/map-selection']);
    }
}
