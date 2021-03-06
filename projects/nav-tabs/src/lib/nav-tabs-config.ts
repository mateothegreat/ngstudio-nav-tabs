import { NavTabsConfigItem } from './nav-tabs-config-item';

export class NavTabsConfig {

    public items: Array<NavTabsConfigItem>;
    public hover?: {

        borderColor?: string,
        backgroundColor?: string

    };
    public active?: {

        borderColor?: string,
        backgroundColor?: string

    };

}
