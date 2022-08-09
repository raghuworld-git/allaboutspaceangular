import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BlogsComponent } from "./components/blogs/blogs.component";



const route:Routes = [
  {
    path:'',component:BlogsComponent
  }
]

@NgModule({
    imports:[RouterModule.forChild(route)],
    exports:[RouterModule]
})
export class BlogsRoutingModule {


}
