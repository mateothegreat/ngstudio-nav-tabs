import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavTabInstance } from './nav-tab-instance';
import { NavTabsConfigItem } from './nav-tabs-config-item';

@Component({
    selector: 'lib-nav-tabs',
    templateUrl: './nav-tabs.component.html',
    styleUrls: [ './nav-tabs.component.scss' ]
})
export class NavTabsComponent {

    public instance: NavTabInstance;
    public selected: NavTabsConfigItem;

    public constructor(private readonly changeDetectorRef: ChangeDetectorRef,
                       private readonly router: Router) {

        changeDetectorRef.detach();

        setTimeout(() => {

            changeDetectorRef.detectChanges();
            changeDetectorRef.reattach();
        });

    }

    public onItemClick(item: NavTabsConfigItem): void {

        this.selected = item;
        this.instance.click$.next(item);

        if (item.path) {

            this.router.navigate([ item.path ]);

        }

    }

}
