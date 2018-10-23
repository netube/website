import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { AppBaseComponent } from "../app.base.component";

@Component({
        selector: "app-terms",
        templateUrl: "./terms.component.html",
        styleUrls: ["../app.component.scss"]
})
export class TermsComponent extends AppBaseComponent {
        constructor(private titleService: Title) {
                super();
                titleService.setTitle("Terms of Use - Netube");
        }
}
