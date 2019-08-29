import { Component, ViewEncapsulation } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { AppBaseComponent } from "../app.base.component";

@Component({
        selector: "app-about",
        templateUrl: "./about.component.html",
        styleUrls: ["../app.component.scss"],
        encapsulation: ViewEncapsulation.None
})

export class AboutComponent extends AppBaseComponent {
        constructor(private titleService: Title) {
                super();
                titleService.setTitle("About - Netube")
        }
}
