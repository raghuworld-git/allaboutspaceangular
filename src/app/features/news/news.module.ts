import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { NewsComponent } from './components/news/news.component';
import { NewsRoutingModule } from "./news-routing.module";

@NgModule({

  declarations: [
    NewsComponent
  ],
  imports: [NewsRoutingModule, SharedModule]
})
export class NewsModule {

}
