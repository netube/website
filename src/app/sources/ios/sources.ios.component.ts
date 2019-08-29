import { Component, ViewEncapsulation } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { AppBaseComponent } from "src/app/app.base.component";

@Component({
        selector: "app-sources-ios",
        template: `
<ng-template [cdkPortalOutlet]="headerContent"></ng-template>
<div class="card">
        This is the Sources/iOS page
</div>
<ng-template [cdkPortalOutlet]="footerContent"></ng-template>
        `,
        styleUrls: ["../../app.component.scss"],
        encapsulation: ViewEncapsulation.None
})
export class SourcesIosComponent extends AppBaseComponent {
        constructor(private titleService: Title) {
                super();
                titleService.setTitle("Netube for iOS source code - Netube");
        }
}
