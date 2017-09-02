import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocalStorageModule } from 'angular-2-local-storage';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { NewPostComponent } from './new-post/new-post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { BlogService } from './blog.service';
import { BlogRoutingModule } from './blog-routing/blog-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    NewPostComponent,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,
    LocalStorageModule.withConfig({
      prefix: 'blogapp',
      storageType: 'localStorage'
    }),
    FormsModule,
    BlogRoutingModule
  ],
  providers: [
    BlogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
