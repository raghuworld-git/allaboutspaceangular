import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { BlogsRoutingModule } from "./blogs-routing.module";
import { BlogsComponent } from "./components/blogs/blogs.component";


@NgModule({
  declarations:[BlogsComponent],
  imports:[BlogsRoutingModule,SharedModule]
})
export class BlogsModule {

}
