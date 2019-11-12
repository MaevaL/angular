import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post:Post;

  constructor(private postService: PostService) {}

  onLike(){
    this.postService.addLoveIts(this.post);
    console.log("like : " + this.post.loveIts);
  }

  onDislike(){
    this.postService.deleteLoveIts(this.post);
    console.log("dislike : " + this.post.loveIts);
  }

  onDelete(){
    this.postService.deletePost(this.post);
  }

  ngOnInit() {
  }

}
