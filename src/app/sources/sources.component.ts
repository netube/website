import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { AppBaseComponent } from "../app.base.component";

@Component({
        selector: "app-sources",
        templateUrl: "./sources.component.html",
        styleUrls: ["../app.component.scss"]
})
export class SourcesComponent extends AppBaseComponent {
        constructor(private titleService: Title) {
                super();
                titleService.setTitle("Source Code - Netube");
        }
}
