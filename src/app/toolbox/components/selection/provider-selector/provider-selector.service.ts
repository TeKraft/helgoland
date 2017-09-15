import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';

import { ParameterFilter } from './../../../model/api/parameterFilter';
import { Service } from './../../../model/api/service';
import { BlacklistedService } from './../../../model/config/config';
import { ApiInterface } from './../../../services/api-interface/api-interface.service';

@Injectable()
export class ProviderSelectorService {

    constructor(
        private apiInterface: ApiInterface
    ) { }

    public fetchProvidersOfAPI(url: string, blacklist: Array<BlacklistedService>, filter: ParameterFilter): Observable<Array<Service>> {
        return new Observable<Array<Service>>((observer: Observer<Array<Service>>) => {
            this.apiInterface.getServices(url, filter)
                .subscribe((providers) => {
                    if (providers && providers instanceof Array) {
                        const usableProviders = providers.map((provider) => {
                            if (!this.isServiceBlacklisted(provider.id, url, blacklist)) {
                                provider.providerUrl = url;
                                return provider;
                            }
                        });
                        observer.next(usableProviders);
                        observer.complete();
                    }
                }, (error) => {
                    observer.error(error);
                    observer.complete();
                });
        });
    }

    private isServiceBlacklisted(serviceID: string, url: string, blacklist: Array<BlacklistedService>): boolean {
        let isBlacklisted = false;
        blacklist.forEach((entry) => {
            if (entry.serviceId === serviceID && entry.apiUrl === url) {
                isBlacklisted = true;
            }
        });
        return isBlacklisted;
    }
}