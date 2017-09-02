import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { NewPostComponent } from '../new-post/new-post.component';
import { PostDetailComponent } from '../post-detail/post-detail.component';
import { PostListComponent } from '../post-list/post-list.component';

const routes: Routes=[
  {path: 'postlist', component: PostListComponent },
  {path: '', redirectTo: '/postlist', pathMatch: 'full' },
  {path: 'newpost' , component: NewPostComponent },
  {path: 'detail/:id' ,component: PostDetailComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
