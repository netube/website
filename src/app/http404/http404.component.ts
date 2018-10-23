import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { AppBaseComponent } from "../app.base.component";

@Component({
        selector: "app-http404",
        templateUrl: "./http404.component.html",
        styleUrls: ["../app.component.scss"]
})

export class Http404Component extends AppBaseComponent {
        constructor(private titleService: Title) {
                super();
                titleService.setTitle("404 not found - Netube");
        }
}
