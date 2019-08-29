import { Component, ViewEncapsulation } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { AppBaseComponent } from "../app.base.component";

@Component({
        selector: "app-http404",
        template: `
<ng-template [cdkPortalOutlet]="headerContent"></ng-template>
<div class="card">
        <h1>404</h1>
        Page not found.
</div>
<ng-template [cdkPortalOutlet]="footerContent"></ng-template>
        `,
        styleUrls: ["../app.component.scss"],
        encapsulation: ViewEncapsulation.None
})

export class Http404Component extends AppBaseComponent {
        constructor(private titleService: Title) {
                super();
                titleService.setTitle("404 not found - Netube");
        }
}
