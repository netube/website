import { Component, ViewEncapsulation } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { AppBaseComponent } from "../app.base.component";

@Component({
        selector: "app-sources",
        template: `
<ng-template [cdkPortalOutlet]="headerContent"></ng-template>
<div class="markdown-content">
        <markdown [src]="'/markdown/sources/index.md'"></markdown>
</div>
<ng-template [cdkPortalOutlet]="footerContent"></ng-template>
        `,
        styleUrls: ["../app.component.scss"],
        encapsulation: ViewEncapsulation.None
})
export class SourcesComponent extends AppBaseComponent {
        constructor(private titleService: Title) {
                super();
                titleService.setTitle("Source Code - Netube");
        }
}
