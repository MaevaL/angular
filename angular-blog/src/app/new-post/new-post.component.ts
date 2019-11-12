import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Post } from '../post';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      title: '',
      content: ''
    });
  }

  onSubmitForm(){
    const formValue = this.postForm.value;
    const newPost = new Post(
      formValue['title'],
      formValue['content'],
      0
    );

    this.postService.addPost(newPost);
    this.router.navigate(['/posts']);
  }

}
