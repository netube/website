import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
        selector: "app-about",
        templateUrl: "./about.component.html",
        styleUrls: ["../app.component.scss"]
})
export class AboutComponent implements OnInit {
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

        netubeOnGithub: string;
        netubeOnTwitter: string;
        netubeOnMedium: string;

        constructor(private titleService: Title ) {
                this.titleService.setTitle("About - Netube");
                this.home = "/";
                this.features = "../features";
                this.documentation = "../documentation";
                this.download = "../download";
                this.help = "../help";
                this.sources = "../sources";
                this.about = "./";
                this.blog = "../blog";
                this.privacy = "../privacy";
                this.terms = "../terms";

                this.netubeOnGithub = "https://github.com/netube";
                this.netubeOnTwitter = "https://twitter.com/NetubeApp";
                this.netubeOnMedium = "https://medium.com/@netube";
        }

        ngOnInit() {}

        displayCurrentYear(): string {
                const date: Date = new Date();
                const year: number = date.getFullYear();
                return year.toString();
        }
}
