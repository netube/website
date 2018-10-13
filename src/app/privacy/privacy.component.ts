import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
        selector: "app-privacy",
        templateUrl: "./privacy.component.html",
        styleUrls: ["../app.component.scss"]
})
export class PrivacyComponent implements OnInit {
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
                this.titleService.setTitle("Privacy Policy - Netube");
                this.home = "/";
                this.features = "../features";
                this.documentation = "../documentation";
                this.download = "../download";
                this.help = "../help";
                this.sources = "../sources";
                this.about = "../about";
                this.blog = "../blog";
                this.privacy = "./";
                this.terms = "../terms";
        }

        ngOnInit() {}

        displayCurrentYear(): string {
                const date: Date = new Date();
                const year: number = date.getFullYear();
                return year.toString();
        }
}
