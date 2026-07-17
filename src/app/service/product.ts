import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  api="https://dummyjson.com/products";
  constructor(private http:HttpClient){}
    getProduct(allproduct: number=200): Observable<any>{
      return this.http.get<any>(`${this.api}?limit=${allproduct}`);
    }
}
