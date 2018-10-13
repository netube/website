import { Component, NgModule } from "@angular/core";
import { MarkdownModule } from "ngx-markdown";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
        imports: [
                MarkdownModule.forChild(),
                FlexLayoutModule
        ],
        declarations:[
                AppComponent
        ]
})

@Component({
        selector: "app-root",
        templateUrl: "./app.component.html",
        styleUrls: ["./app.component.scss"]
})
export class AppComponent {
        constructor() {}
}
