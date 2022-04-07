import { Subject } from 'rxjs';
import { NavTabsConfig } from './nav-tabs-config';
import { NavTabsConfigItem } from './nav-tabs-config-item';

export class NavTabInstance {

    public name: string;
    public config: NavTabsConfig;
    public click$?: Subject<NavTabsConfigItem> = new Subject();

    public constructor(instance: NavTabInstance) {

        Object.assign(this, instance);

    }

}
