import { Injectable, isDevMode } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  BASE_URL = isDevMode() ? '//localhost:3030/api/' : '/api/'
  headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': 'Bearer <token>',
  })

  public get(endpoint: string, data?: any) {
    return this.httpRequest(endpoint, 'get', data)
  }

  public post(endpoint: string, data?: any) {
      return this.httpRequest(endpoint, 'post', data)
  }

  public put(endpoint: string, data: any) {
    return this.httpRequest(endpoint, 'put', data)
  }

  public delete(endpoint: string, data: any) {
    return this.httpRequest(endpoint, 'delete', data)
  }

  private httpRequest(endpoint: string, method: string, data = null) {
    try {
      const option = {
        body: data,
      }
      return this.http.request(method, `${this.BASE_URL}${endpoint}`,option)
    } catch (err: any) {
        console.log(`Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data: `, data)
        console.dir(err)
        if (err.response && err.response.status === 401) sessionStorage.clear()
        throw err
    }
}
}
