import { Component, OnInit } from '@angular/core';
import { BlogPostItem } from '../blog-post-item';
import { BlogService } from '../blog.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
 post: BlogPostItem = new BlogPostItem();
  constructor(
    private service: BlogService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.paramMap.switchMap((params : ParamMap) => this.service.getPost(+params.get('id')))
      .subscribe( post => this.post = post);
  }

  deletePost(id): void{
    this.service.deletePost(id)
      .then(post => this.goBack());
  }

  goBack(): void{
    this.location.back();
  }
}
