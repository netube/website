import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
        selector: "app-home",
        templateUrl: "./home.component.html",
        styleUrls: ["../app.component.scss"]
})

export class HomeComponent implements OnInit {
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
        netubeOnGooglePlay: string;
        netubeOnAppStore: string;
        netubeOnMacAppStore: string;
        netubeOnMicrosoftStore: string;
        ccBy4Link: string;

        constructor(private titleService: Title ) {
                this.titleService.setTitle("Netube");
                this.home = "/";
                this.features = "features"
                this.documentation = "documentation";
                this.download = "download";
                this.help = "help";
                this.sources = "sources";
                this.about = "about";
                this.blog = "blog";
                this.privacy = "privacy";
                this.terms = "terms";
                this.netubeOnGithub = "https://github.com/netube";
                this.netubeOnGooglePlay = "https://play.google.com";
                this.netubeOnAppStore = "https://itunes.apple.com";
                this.netubeOnMacAppStore = "https://itunes.apple.com";
                this.netubeOnMicrosoftStore = "https://www.microsoft.com";
                this.ccBy4Link = "https://creativecommons.org/licenses/by/4.0";
        }

        ngOnInit() {}

        displayCurrentYear(): string {
                const date: Date = new Date();
                const year: number = date.getFullYear();
                return year.toString();
        }
}
