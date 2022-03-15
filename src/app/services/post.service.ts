import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private posts: BehaviorSubject<Post[]> = new BehaviorSubject<Post[]>([]);
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  addPost(post: Post) {
    this.posts.next([...this.posts.value, post]);
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseUrl}/posts`);
  }
}
