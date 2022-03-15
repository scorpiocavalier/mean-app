import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private posts$: BehaviorSubject<Post[]> = new BehaviorSubject<Post[]>([]);
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {
    this.http
      .get<Post[]>(`${this.baseUrl}/posts`)
      .pipe(take(1))
      .subscribe((posts) => this.posts$.next(posts));
  }

  addPost(post: Post) {
    // Add new post to the backend posts
    this.http
      .post(`${this.baseUrl}/posts`, post)
      .pipe(take(1))
      .subscribe({
        next: () => console.log('New post added successfully'),
        error: () => console.log('Could not add post'),
      });

    // Add new post to the frontend posts and emit to everyone
    this.posts$.next([...this.posts$.value, post]);
  }

  getPosts(): Observable<Post[]> {
    return this.posts$.asObservable();
  }
}
