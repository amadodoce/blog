import { Component } from '@angular/core';
import { BlogService } from '../blog.service';
import { BlogPostItem } from '../blog-post-item';
import { Location } from '@angular/common';

@Component({
  selector: 'newpost',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent{

  newtitle: string;
  newDescription: string;
  constructor(
    private service: BlogService,
    private location: Location
  ) { }

  newPost() : void{
    this.service.newPost(this.newtitle ,this.newDescription)
      .then(post => this.goBack())
  }

  goBack(): void{
    this.location.back();
  }

}
