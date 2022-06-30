import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { Observable } from "rxjs";
import { Comment } from "../models/comment.model";

const baseUrl = environment.Urlglintranet;

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http : HttpClient) { }


  addComment(comment: Comment) : Observable<any[]>
  {
    return this.http.post<any[]>(`${baseUrl}/comment`, comment)
  }
}
