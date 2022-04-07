import { AfterViewInit, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { NavTabsService } from '../../projects/nav-tabs/src/lib/nav-tabs.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements AfterViewInit {

    @ViewChild('tabs', { read: ViewContainerRef }) private viewContainerRef: ViewContainerRef;


    public constructor(private readonly navTabsService: NavTabsService) {

    }

    public ngAfterViewInit() {

        this.navTabsService.open('one', this.viewContainerRef, {

            active: {

                borderColor: 'red'

            },
            hover: {

                borderColor: 'blue'

            },
            items: [

                {

                    label: 'one asd fasdfsd',
                    path: 'one'

                }, {

                    label: 'two'

                }

            ]

        }).click$.subscribe(item => {

            console.log(item);

        });

    }

}
