import { Component, OnInit } from "@angular/core";
import { ComponentPortal } from "@angular/cdk/portal";

@Component({
        selector: "app-base",
        template: "",
        styleUrls: ["./app.component.scss"]
})

export class AppBaseComponent {
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

        headerContent: ComponentPortal<HeaderContentComponent> = new ComponentPortal(HeaderContentComponent)
        footerContent: ComponentPortal<FooterContentComponent> = new ComponentPortal(FooterContentComponent)
}


@Component({
        selector: "app-header-content",
        template: `<div fxShow="true" fxHide.lt-sm="true">
        <ul class="toolbar">
                <li class="float-left">
                        <a class="menu-button" routerLink="{{ home }}">Netube</a>
                </li>
                <li class="float-left">
                        <a class="menu-button" routerLink="{{ features }}">Features</a>
                </li>
                <li class="float-left">
                        <a class="menu-button" routerLink="{{ documentation }}">Documentation</a>
                </li>
                <li class="float-left">
                        <a class="menu-button" routerLink="{{ download }}">Download</a>
                </li>
                <li class="float-right">
                        <a class="menu-button" routerLink="{{ sources }}">Source Code</a>
                </li>
        </ul>
</div>
<div fxHide.gt-xs="true">
        <ul class="toolbar">
                <li class="float-right">
                        <a class="menu-button" routerLink="{{ sources }}">Source Code</a>
                </li>
                <li>
                        <a class="menu-button" routerLink="{{ home }}">Netube</a>
                </li>
                <li class="float-right">
                        <a class="menu-button" routerLink="{{ documentation }}">Documentation</a>
                </li>
                <li>
                        <a class="menu-button" routerLink="{{ features }}">Features</a>
                </li>
                <li>
                        <a class="menu-button" routerLink="{{ download }}">Download</a>
                </li>
        </ul>
</div>`
})
export class HeaderContentComponent extends AppBaseComponent {}

@Component({
        selector: "app-footer-content",
        template: `<div fxShow="true" fxHide.lt-sm="true">
        <ul class="toolbar absolute-position">
                <li class="float-left">
                        <a class="menu-button" routerLink="{{ about }}">About</a>
                </li>
                <li class="float-left">
                        <a class="menu-button" routerLink="{{ blog }}">Blog</a>
                </li>
                <li class="float-left">
                        <a class="menu-button" routerLink="{{ privacy }}">Privacy</a>
                </li>
                <li class="float-left">
                        <a class="menu-button" routerLink="{{ terms }}">Terms of Use</a>
                </li>
                <li class="float-right">
                        <div class="footer-note-text">
                                Copyright © {{ copyrightYears }} <a class="light-color" href="https://djeung.org">Bing Djeung</a>
                                <br>
                                Documents licensed under <a class="light-color" href="{{ ccBy4Link }}">CC BY 4.0</a>
                        </div>
                </li>
        </ul>
</div>
<div fxHide.gt-xs="true">
        <ul class="toolbar absolute-position">
                <li class="float-right">
                        <a class="menu-button" routerLink="{{ blog }}">Blog</a>
                </li>
                <li>
                        <a class="menu-button" routerLink="{{ about }}">About</a>
                </li>
                <li class="float-right">
                        <a class="menu-button" routerLink="{{ terms }}">Terms of Use</a>
                </li>
                <li>
                        <a class="menu-button" routerLink="{{ privacy }}">Privacy</a>
                </li>
                <li>
                        <div class="footer-note-text-mobile">
                                Copyright © {{ copyrightYears }} <a class="light-color" href="{{ djeung }}">Bing Djeung</a>
                                <br>
                                Documents licensed under <a class="light-color" href="{{ ccBy4Link }}">CC BY 4.0</a>
                        </div>
                </li>
        </ul>
</div>`
})
export class FooterContentComponent extends AppBaseComponent {}
