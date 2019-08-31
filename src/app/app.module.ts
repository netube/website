
import { BrowserModule, Title } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http"
import { FlexLayoutModule } from "@angular/flex-layout";
import { PortalModule } from "@angular/cdk/portal";

import { MarkdownModule } from "ngx-markdown";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing.module";
import { AppBaseComponent, HeaderContentComponent, FooterContentComponent } from "./app.base.component";

import { HomeComponent } from "./home/home.component";
import { FeaturesComponent } from "./features/features.component";
import { DocumentationComponent } from "./documentation/documentation.component";

import { DownloadComponent } from "./download/download.component";
import { DownloadIosComponent } from "./download/ios/download.ios.component";

import { SourcesComponent } from "./sources/sources.component";
import { SourcesIosComponent } from "./sources/ios/sources.ios.component";

import { AboutComponent } from "./about/about.component";
import { BlogComponent } from "./blog/blog.component";
import { PrivacyComponent } from "./privacy/privacy.component";
import { TermsComponent } from "./terms/terms.component";
import { KeysComponent } from "./keys/keys.component";
import { Http404Component } from "./http404/http404.component";

@NgModule({
        imports: [
                BrowserModule,
                BrowserAnimationsModule,
                HttpClientModule,
                FlexLayoutModule,
                MarkdownModule.forRoot(),
                AppRoutingModule,
                PortalModule
        ],
        declarations: [
                AppComponent,
                AppBaseComponent,
                HeaderContentComponent,
                FooterContentComponent,
                HomeComponent,
                FeaturesComponent,
                DocumentationComponent,
                DownloadComponent,
                DownloadIosComponent,
                SourcesComponent,
                SourcesIosComponent,
                AboutComponent,
                BlogComponent,
                PrivacyComponent,
                TermsComponent,
                KeysComponent,
                Http404Component
        ],
        providers: [Title],
        entryComponents: [HeaderContentComponent, FooterContentComponent],
        bootstrap: [AppComponent]
})
export class AppModule { }
