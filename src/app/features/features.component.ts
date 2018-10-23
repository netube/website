import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { AppBaseComponent } from "../app.base.component";

@Component({
        selector: "app-features",
        templateUrl: "./features.component.html",
        styleUrls: ["../app.component.scss"]
})

export class FeaturesComponent extends AppBaseComponent {
        constructor(private titleService: Title) {
                super();
                titleService.setTitle("Features - Netube");
        }
}
