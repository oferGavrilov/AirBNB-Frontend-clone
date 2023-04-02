import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Review, Stay, StayFilter } from '../models/stay.model';
import { HttpService } from './http.service';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StayService {

  constructor(
    private httpService: HttpService
  ) { }

  STAY_KEY: string = 'stayDB';
  STAY_URL: string = 'stay/'

  private _stays$ = new BehaviorSubject<Stay[]>([]);
  public stays$ = this._stays$.asObservable()

  private _stayFilter$ = new BehaviorSubject<StayFilter>(this.getEmptyFilter());
  public stayFilter$ = this._stayFilter$.asObservable()

  public async loadStays() {
    const filterBy = this._stayFilter$.value
    const queryParams = this.getQueryParams(filterBy)
    console.log('queryParams:', queryParams)
    const stays = await lastValueFrom(this.httpService.get(this.STAY_URL + queryParams, null)) as Stay[]
    this._stays$.next(stays)
  }

  public query(filterBy: StayFilter) {
    const queryParams = this.getQueryParams(filterBy)
    return this.httpService.get(this.STAY_URL + queryParams, null) as Observable<Stay[]>
  }

  public getById(stayId: string): Observable<Stay> {
    return this.httpService.get(this.STAY_URL + stayId, null) as Observable<Stay>
  }

  public save(stay: any) {
    if (stay._id) return lastValueFrom(this.httpService.put(this.STAY_URL, stay))
    return lastValueFrom(this.httpService.post(this.STAY_URL, stay))
  }

  public getEmptyFilter() {
    return {
      likeByUser: '',
      place: '',
      label: '',
      hostId: '',
      isPetAllowed: false
    }
  }

  public setFilter(filter: StayFilter) {
    this._stayFilter$.next(filter)
    this.loadStays()
  }

  public getEmptyStay() {
    return {
      name: '',
      type: '',
      imgUrls: new Array<string>(0),
      price: 0,
      summary: '',
      capacity: 0,
      amenities: new Array<string>(0),
      bathrooms: 0,
      bedrooms: 0,
      roomType: '',
      host: {
        _id: '',
        createAt: Date.now(),
        fullname: '',
        location: '',
        about: '',
        responseTime: '',
        thumbnailUrl: "https://a0.muscache.com/im/pictures/542dba0c-eb1b-4ab3-85f3-94d3cc8f87a4.jpg?aki_policy=profile_small",
        pictureUrl: "https://xsgames.co/randomusers/avatar.php?g=male",
        isSuperhost: true,
        policyNumber: "36133410"
      },
      loc: {
        country: '',
        countryCode: '',
        city: '',
        address: '',
        lat: -156.6917,
        lan: 20.93792
      },
      reviews: new Array<string>(0),
      likedByUsers: new Array<string>(0),
      labels: new Array<string>(0),
      statReviews: {
        cleanliness: 0,
        communication: 4.3,
        checkIn: 0,
        accuracy: 0,
        location: 0,
        value: 0
      }
    }
  }

  private getQueryParams(filterBy: StayFilter) {
    let params = '?'
    if (filterBy.likeByUser) params += `likeByUser=${filterBy.likeByUser}&`
    if (filterBy.hostId) params += `hostId=${filterBy.hostId}&`
    if (filterBy.label) params += `label=${filterBy.label}&`
    if (filterBy.isPetAllowed) params += `isPetAllowed=${filterBy.isPetAllowed}&`
    if (filterBy.place) params += `place=${filterBy.place}`
    return params
  }

  public getEmptyReview(): Review {
    return {
      "at": Date.now(),
      "by": {
        "_id": '',
        "fullname": '',
        "imgUrl": '',
      },
      "txt": ''
    }
  }
}
