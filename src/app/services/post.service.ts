import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private posts: BehaviorSubject<Post[]> = new BehaviorSubject<Post[]>([
    {
      title: 'First Post',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt maiores illum, architecto debitis vitae perspiciatis accusamus commodi porro et! Harum?',
    },
  ]);

  constructor() {}

  addPost(post: Post) {
    this.posts.next([...this.posts.value, post]);
  }

  getPosts(): Observable<Post[]> {
    return this.posts.asObservable();
  }
}
