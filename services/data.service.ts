import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
  @Inject(String) private API_URL: string, 
  private http: HttpClient) { }

  // Get 

  getAllData() : Observable<any> {
    return this.http.get(this.API_URL)
  }

  getDataById(id: string) : Observable<any> {
    return this.http.get(`this.API_URL/${id}`);
  }

  // Update

  updateData(data : any) : Observable<any> {
    return this.http.put(this.API_URL, data);
  }

  // Delete

  deleteData(id : any) : Observable<any> {
    return this.http.delete(`this.API_URL/${id}`); 
  }
}
