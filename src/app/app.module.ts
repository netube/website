import { BrowserModule, Title } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http"

import { AppMaterialModule } from "./app.material.module";
import { MarkdownModule } from "ngx-markdown";
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppRoutes } from "./app.routes";
import { AppComponent } from "./app.component";

import { HomeComponent } from "./home/home.component";
import { FeaturesComponent } from "./features/features.component";
import { DocumentationComponent } from "./documentation/documentation.component";

import { DownloadComponent } from "./download/download.component";
import { DownloadIosComponent } from "./download/ios/download.ios.component";

import { HelpComponent } from "./help/help.component";

import { SourcesComponent } from "./sources/sources.component";
import { SourcesIosComponent } from "./sources/ios/sources.ios.component";

import { AboutComponent } from "./about/about.component";
import { BlogComponent } from "./blog/blog.component";
import { PrivacyComponent } from "./privacy/privacy.component";
import { TermsComponent } from "./terms/terms.component";
import { KeysComponent } from "./keys/keys.component";
import { Http404Component } from "./http404/http404.component";

@NgModule({
        declarations: [
                AppComponent,
                HomeComponent,
                FeaturesComponent,
                DocumentationComponent,
                DownloadComponent,
                DownloadIosComponent,
                HelpComponent,
                SourcesComponent,
                SourcesIosComponent,
                AboutComponent,
                BlogComponent,
                PrivacyComponent,
                TermsComponent,
                KeysComponent,
                Http404Component
        ],
        imports: [
                BrowserModule,
                BrowserAnimationsModule,
                AppMaterialModule,
                HttpClientModule,
                MarkdownModule.forRoot(),
                FlexLayoutModule,
                AppRoutes
        ],
        providers: [Title],
        entryComponents: [],
        bootstrap: [AppComponent]
})
export class AppModule { }
