import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { AppBaseComponent } from "../app.base.component";

@Component({
        selector: "app-privacy",
        templateUrl: "./privacy.component.html",
        styleUrls: ["../app.component.scss"]
})
export class PrivacyComponent extends AppBaseComponent {
        constructor(private titleService: Title) {
                super();
                titleService.setTitle("Privacy - Netube");
        }
}
