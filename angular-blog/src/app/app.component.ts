import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts = [
    {
    title: "Premier Post",
    content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500,",
    loveIts: 0,
    created_at: new Date()
    },

    {
      title: "Second Post",
      content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500,",
      loveIts: 10,
      created_at: new Date()
    },

    {
      title: "Troisieme Post",
      content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500,",
      loveIts: 2,
      created_at: new Date()
      }

  ];
}
