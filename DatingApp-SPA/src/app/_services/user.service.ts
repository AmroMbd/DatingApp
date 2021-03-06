import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_models/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = environment.apiUrl + 'users/';

constructor(private http:HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl /*, httpOptions*/);
  }

  getUser(id): Observable<User>{
    return this.http.get<User>(this.baseUrl + id /*, httpOptions*/);
  }

  updateUser(id: number, user: User){
    return this.http.put(this.baseUrl + id , user);
  }

  setMainPhoto(userId: number, id:number){
    return this.http.post(this.baseUrl + userId + '/photos/' + id + '/setMain', {});
  }

  deletePhoto(userId:number, photoId:number){
    return this.http.delete(this.baseUrl + userId + '/photos/' + photoId);
  }
}
