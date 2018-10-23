import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { AppBaseComponent } from "src/app/app.base.component";

@Component({
        selector: "app-sources-ios",
        templateUrl: "./sources.ios.component.html",
        styleUrls: ["../../app.component.scss"]
})
export class SourcesIosComponent extends AppBaseComponent {
        constructor(private titleService: Title) {
                super();
                titleService.setTitle("Netube for iOS source code - Netube");
        }
}
