import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() title:string;
  @Input() content:string;
  @Input() loveIts:number;
  @Input() created_at:Date;

  constructor() {}

  onLike(){
    ++this.loveIts;
    console.log("like : " + this.loveIts);
  }

  onDislike(){
    --this.loveIts;
    console.log("dislike : " + this.loveIts);
  }

  ngOnInit() {
  }

}
