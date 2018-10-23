import { Component } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { AppBaseComponent } from '../app.base.component';

@Component({
        selector: "app-blog",
        templateUrl: "./blog.component.html",
        styleUrls: ["../app.component.scss"]
})

export class BlogComponent extends AppBaseComponent {
        constructor(private titleService: Title) {
                super();
                titleService.setTitle("Blog - Netube");
        }
}
