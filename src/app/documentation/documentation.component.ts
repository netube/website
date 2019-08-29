import { Component, ViewEncapsulation } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { AppBaseComponent } from "../app.base.component";

@Component({
        selector: "app-documentation",
        template: `
<ng-template [cdkPortalOutlet]="headerContent"></ng-template>
<div class="markdown-content">
        <div markdown [src]="'/markdown/documentation/overview.md'"></div>
</div>
<ng-template [cdkPortalOutlet]="footerContent"></ng-template>
        `,
        styleUrls: ["../app.component.scss"],
        encapsulation: ViewEncapsulation.None
})
export class DocumentationComponent extends AppBaseComponent {
        constructor(private titleService: Title) {
                super();
                titleService.setTitle("Documentation - Netube");
        }
}
