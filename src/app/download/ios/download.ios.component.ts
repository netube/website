import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { AppBaseComponent } from "src/app/app.base.component";

@Component({
        selector: "app-download-ios",
        templateUrl: "./download.ios.component.html",
        styleUrls: ["../../app.component.scss"]
})
export class DownloadIosComponent extends AppBaseComponent {
        constructor(private titleService: Title) {
                super();
                titleService.setTitle("Download Netube for iOS - Netube");
        }
}
