import { NgModule, ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

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

const routes: Routes = [
        { path: "", component: HomeComponent },
        { path: "features", component: FeaturesComponent },
        { path: "documentation", component: DocumentationComponent },
        { path: "download", component: DownloadComponent },
        { path: "download/ios", component: DownloadIosComponent },
        { path: "sources", component: SourcesComponent },
        { path: "sources/ios", component: SourcesIosComponent },
        { path: "about", component: AboutComponent },
        { path: "blog", component: BlogComponent },
        { path: "privacy", component: PrivacyComponent },
        { path: "terms", component: TermsComponent },
        { path: "keys", component: KeysComponent },
        { path: "**", component: Http404Component}
];

@NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
})
export class AppRoutingModule { }
