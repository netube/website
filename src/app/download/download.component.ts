import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { AppBaseComponent } from "../app.base.component";

@Component({
        selector: "app-download",
        templateUrl: "./download.component.html",
        styleUrls: ["../app.component.scss"]
})
export class DownloadComponent extends AppBaseComponent {
        constructor(private titleService: Title) {
                super();
                titleService.setTitle("Download - Netube");
        }
}
