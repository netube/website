import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { AppBaseComponent } from "../app.base.component";

@Component({
        selector: "app-documentation",
        templateUrl: "./documentation.component.html",
        styleUrls: ["../app.component.scss"]
})
export class DocumentationComponent extends AppBaseComponent {
        constructor(private titleService: Title) {
                super();
                titleService.setTitle("Documentation - Netube");
        }
}
