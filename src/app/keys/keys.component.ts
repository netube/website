import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { AppBaseComponent } from "../app.base.component";

@Component({
        selector: "app-keys",
        templateUrl: "./keys.component.html",
        styleUrls: ["../app.component.scss"]
})
export class KeysComponent extends AppBaseComponent {
        constructor(private titleService: Title) {
                super();
                titleService.setTitle("GPG Keys - Netube");
        }
}
