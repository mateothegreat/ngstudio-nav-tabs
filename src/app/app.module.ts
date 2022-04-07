import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NavTabsModule } from '../../projects/nav-tabs/src/lib/nav-tabs.module';

import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';

@NgModule({

    declarations: [

        AppComponent,
        OneComponent,
        TwoComponent

    ],

    imports: [

        BrowserModule,
        NavTabsModule,
        RouterModule.forRoot([

            {

                path: 'one',
                component: OneComponent

            }, {

                path: 'two',
                component: TwoComponent

            }

        ])

    ],

    providers: [],
    bootstrap: [ AppComponent ]

})
export class AppModule {
}
