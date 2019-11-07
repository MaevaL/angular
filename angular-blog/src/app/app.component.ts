import { Component, OnInit } from '@angular/core';
import {Post} from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  posts:Array<Post> = new Array<Post>();

  ngOnInit(): void {
      var post1 = new Post("Premier Post", "Le Lorem Ipsum est simplement du faux texte employé dans la composition", 0);
      var post2 = new Post("Second Post", "Le Lorem Ipsum est simplement du faux texte employé dans la composition", 10);
      var post3 = new Post("Troisieme Post", "Le Lorem Ipsum est simplement du faux texte employé dans la composition", 5);
      
      this.posts.push(post1);
      this.posts.push(post2);
      this.posts.push(post3);
  }

  // posts = [
  //   {
  //   title: "Premier Post",
  //   content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500,",
  //   loveIts: 0,
  //   created_at: new Date()
  //   },

  //   {
  //     title: "Second Post",
  //     content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500,",
  //     loveIts: 10,
  //     created_at: new Date()
  //   },

  //   {
  //     title: "Troisieme Post",
  //     content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500,",
  //     loveIts: 2,
  //     created_at: new Date()
  //     }

  // ];
}
