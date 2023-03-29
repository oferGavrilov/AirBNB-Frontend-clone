import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable , BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private currentApiStatus: BehaviorSubject<Boolean>;
  obsCurrentApiStatus: Observable<Boolean>;

  constructor(httpClient: HttpClient) {
    this.currentApiStatus =  new BehaviorSubject(new Boolean(false));
    this.obsCurrentApiStatus = this.currentApiStatus.asObservable();
   }

}
