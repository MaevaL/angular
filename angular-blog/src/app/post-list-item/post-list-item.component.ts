import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  title= 'Premier';
  content= 'TEST content';
  loveIts = 10;
  created_at = new Date();

  // constructor(title: string,
  // content: string,
  // loveIts: number,
  // created_at: Date) { 

  //   this.title = title;
  //   this.content = content;
  //   this.loveIts = loveIts;
  //   this.created_at = new Date();
  // }

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
