import { Injectable, ViewContainerRef } from '@angular/core';
import { DynamicComponentFactoryService } from '@ngstudio/dynamic-component-factory';
import { NavTabInstance } from './nav-tab-instance';
import { NavTabsConfig } from './nav-tabs-config';
import { NavTabsComponent } from './nav-tabs.component';

@Injectable({
    providedIn: 'root'
})
export class NavTabsService {

    public instances: { [name: string]: NavTabInstance } = {};

    public constructor(private readonly dynamicComponentFactoryService: DynamicComponentFactoryService) {

    }

    public open(name: string, viewContainerRef: ViewContainerRef, config: NavTabsConfig): NavTabInstance {

        const instance = this.dynamicComponentFactoryService.createInContainer('tabs', viewContainerRef, NavTabsComponent);

        this.instances[name] = new NavTabInstance({

            name,
            config

        });


        instance.componentRef.instance.instance = this.instances[name];

        return this.instances[name];

    }

}
