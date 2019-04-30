import { Component, OnInit } from "@angular/core";

@Component({
        selector: "app-base",
        templateUrl: "./app.component.html",
        styleUrls: ["./app.component.scss"]
})

export class AppBaseComponent implements OnInit {
        readonly home: string = "/";
        readonly features: string = "/features";
        readonly documentation: string = "/documentation";
        readonly download: string = "/download";
        readonly sources: string = "/sources";
        readonly about: string = "/about";
        readonly blog: string = "/blog";
        readonly privacy: string = "/privacy";
        readonly terms: string = "/terms";

        readonly djeung: string = "https://djeung.org";
        readonly ccBy4Link: string = "https://creativecommons.org/licenses/by/4.0";

        readonly netubeOnGithub: string = "https://github.com/netube";
        readonly netubeOnBitbucket: string = "https://bitbucket.org";
        readonly netubeOnTwitter: string = "https://twitter.com/NetubeApp";
        readonly netubeOnMedium: string = "https://medium.com/@netube";

        readonly netubeOnGooglePlay: string = "https://play.google.com";
        readonly netubeOnAppStore: string = "https://itunes.apple.com";
        readonly netubeOnMacAppStore: string = "https://itunes.apple.com";
        readonly netubeOnMicrosoftStore: string = "https://www.microsoft.com";

        readonly copyrightYears: string = "2018-" + AppBaseComponent.getCurrentYear();

        private static getCurrentYear(): string {
                const date: Date = new Date();
                const year: number = date.getFullYear();
                return year.toString();
        }

        constructor() {}
        ngOnInit() {}
}
