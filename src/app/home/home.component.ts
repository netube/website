import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { AppBaseComponent } from "../app.base.component";

@Component({
        selector: "app-home",
        templateUrl: "./home.component.html",
        styleUrls: ["../app.component.scss"]
})

export class HomeComponent extends AppBaseComponent {

        constructor(private titleService: Title) {
                super();
                this.titleService.setTitle("Netube");
        }
}
