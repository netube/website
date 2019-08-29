import { Component, ViewEncapsulation } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { AppBaseComponent } from "src/app/app.base.component";

@Component({
        selector: "app-download-ios",
        template: `
<ng-template [cdkPortalOutlet]="headerContent"></ng-template>
<div class="card">
        This is the Privacy page
</div>
<ng-template [cdkPortalOutlet]="footerContent"></ng-template>
        `,
        styleUrls: ["../../app.component.scss"],
        encapsulation: ViewEncapsulation.None
})
export class DownloadIosComponent extends AppBaseComponent {
        constructor(private titleService: Title) {
                super();
                titleService.setTitle("Download Netube for iOS - Netube");
        }
}
