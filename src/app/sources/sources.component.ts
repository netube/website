import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
        selector: "app-sources",
        templateUrl: "./sources.component.html",
        styleUrls: ["../app.component.scss"]
})
export class SourcesComponent implements OnInit {
        home: string;
        features: string;
        documentation: string;
        download: string;
        help: string;
        sources: string;
        about: string;
        blog: string;
        privacy: string;
        terms: string;

        constructor(private titleService: Title ) {
                this.titleService.setTitle("Source Code - Netube");
                this.home = "/";
                this.features = "../features";
                this.documentation = "../documentation";
                this.download = "../download";
                this.help = "../help";
                this.sources = "./";
                this.about = "../about";
                this.blog = "../blog";
                this.privacy = "../privacy";
                this.terms = "../terms";
        }

        ngOnInit() {}

        displayCurrentYear(): string {
                const date: Date = new Date();
                const year: number = date.getFullYear();
                return year.toString();
        }
}
