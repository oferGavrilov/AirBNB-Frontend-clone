import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { User } from '../models/user.model';
import { HttpService } from './http.service';
import { SocketService } from './socket.service';
import { StayService } from './stay.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private httpService: HttpService,
    private stayService: StayService,
    private socketService: SocketService) { }

  private STORAGE_KEY_LOGGEDIN_USER = 'user'
  private AUTH_URL = 'auth/'

  public getUser(): User {
    return JSON.parse(sessionStorage.getItem(this.STORAGE_KEY_LOGGEDIN_USER) as string)
  }

  public async login(credentials: User) {
    try {
      const loggedInUser = await lastValueFrom(this.httpService.post(this.AUTH_URL + 'login', credentials)) as User
      if (loggedInUser) {
        this.saveLocalUser(loggedInUser)
        // this.socketService.login(loggedInUser._id)
      }
    } catch (err) {
      throw err
    }
  }

  public async signup(user: User) {
    try {
      user = await lastValueFrom(this.httpService.post(this.AUTH_URL + 'signup', user)) as User
      this.saveLocalUser(user)
    } catch (err) {
      throw err
    }
  }

  public getEmptyUser() {
    return {
      username: '',
      fullname: '',
      password: '',
      imgUrl: ''
    }
  }

  public async logout() {
    try {
      const msg = await lastValueFrom(this.httpService.post(this.AUTH_URL + 'logout'))
      sessionStorage.clear()
      console.log('msg:', msg)
      this.stayService.loadStays()
    } catch (err) {
      console.log('err:', err)
    }
  }

  private saveLocalUser(user: User) {
    sessionStorage.setItem(this.STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
  }
}
