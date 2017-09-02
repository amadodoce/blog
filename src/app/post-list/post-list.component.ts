import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { BlogPostItem } from '../blog-post-item';

@Component({
  selector: 'postlist',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: BlogPostItem [] = [];


  constructor(
    private service: BlogService
  ) { }

  ngOnInit() {
    this.service.getList()
      .then(post => this.posts = post);
  }

}
