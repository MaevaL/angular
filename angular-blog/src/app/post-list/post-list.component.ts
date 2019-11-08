import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  postsList:Array<Post> = new Array<Post>();

  constructor(private postService: PostService) { 
    this.postsList = this.postService.posts;
    console.log(this.postsList.length);
  }

  ngOnInit() {
  }

}
