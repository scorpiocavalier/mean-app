import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent implements OnInit {
  form: FormGroup;

  get title() {
    return this.form.get('title') as FormControl;
  }

  get content() {
    return this.form.get('content') as FormControl;
  }

  constructor(private fb: FormBuilder, private postService: PostService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      title: [null, Validators.required],
      content: [null, Validators.required],
    });
  }

  addPost(formDirective: FormGroupDirective) {
    this.postService.addPost(this.form.getRawValue());
    formDirective.resetForm();
  }
}
