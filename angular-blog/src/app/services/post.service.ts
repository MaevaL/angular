import { Injectable, OnInit } from '@angular/core';
import { Post } from '../post';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts:Array<Post> = new Array<Post>();
   

  constructor() { 
    var post1 = new Post("Premier Post", "Le Lorem Ipsum est simplement du faux texte employé dans la composition", 0);
    var post2 = new Post("Second Post", "Le Lorem Ipsum est simplement du faux texte employé dans la composition", 10);
    var post3 = new Post("Troisieme Post", "Le Lorem Ipsum est simplement du faux texte employé dans la composition", 5);
    
    this.posts.push(post1);
    this.posts.push(post2);
    this.posts.push(post3);

    console.log(this.posts.length);
  }


  addPost(post: Post){
    this.posts.push(post);

  }

  deletePost(post: Post){
    this.posts = this.posts.filter(
      p => p !== post
    );

  } 
  
  addLoveIts(post: Post){
    ++post.loveIts;
  }

  deleteLoveIts(post: Post){
    --post.loveIts;
  }

  // getPosts() : Observable<Post[]> {
  //   return new Observable<Post[]>(
  //     (resolve, reject) => {
  //       resolve(this.posts);
  //       reject()
  //     } 
  //   )
  // }
}
