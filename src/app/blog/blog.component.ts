import { Component, ViewEncapsulation } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { AppBaseComponent } from '../app.base.component';

@Component({
        selector: "app-blog",
        template: `
<ng-template [cdkPortalOutlet]="headerContent"></ng-template>
<div class="card">
        This is the Blog page
</div>
<ng-template [cdkPortalOutlet]="footerContent"></ng-template>
        `,
        styleUrls: ["../app.component.scss"],
        encapsulation: ViewEncapsulation.None
})

export class BlogComponent extends AppBaseComponent {
        constructor(private titleService: Title) {
                super();
                titleService.setTitle("Blog - Netube");
        }
}
