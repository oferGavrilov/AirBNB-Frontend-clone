import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private USER_STORAGE_KEY = 'users'
  private STORAGE_KEY_LOGGEDIN_USER = 'user'

  constructor(private utilService: UtilService) {
    this.createUsers()
  }

  public getUser(): User {
    return JSON.parse(sessionStorage.getItem(this.STORAGE_KEY_LOGGEDIN_USER) as string)
  }

  private getUsers() {
    return this.utilService.loadFromStorage(this.USER_STORAGE_KEY)
  }

  public login(user: User): void {
    const users = this.getUsers()
    const loggedInUser = users.find((currUser: User) => currUser.password === user.password && currUser.username === user.username)
    if (loggedInUser) this.saveLocalUser(loggedInUser)
    else throw Error
  }

  public signup(user: User): void {
    user = this.save(user)
    this.saveLocalUser(user)
  }

  public getEmptyUser() {
    return {
      username: '',
      fullname: '',
      password: '',
      favorites: [],
    }
  }

  public logout(): void {
    sessionStorage.clear()
  }

  private save(user: User): User {
    let users = this.getUsers()
    if (user._id) users = users.map((currUser: User) => currUser._id === user._id ? user : currUser)
    else {
      user._id = this.utilService.makeId()
      users.push(user)
    }
    this.utilService.saveToStorage(this.USER_STORAGE_KEY, users)
    return user
  }

  private saveLocalUser(user: User) {
    sessionStorage.setItem(this.STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
  }

  private createUsers() {
    let users = this.utilService.loadFromStorage(this.USER_STORAGE_KEY)
    if (!users || !users.length) {
      users = [
        {
          _id: '1001',
          fullname: "puki ben david",
          username: "puki",
          password: 'puki',
          favorites: [],
          isHost: false
        }
      ]
      this.utilService.saveToStorage(this.USER_STORAGE_KEY, users)
    }
  }
}
