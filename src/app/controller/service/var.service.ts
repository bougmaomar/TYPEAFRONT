import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VarService {
  isLogged: boolean;
  constructor() {}
  setIsLogged(data: boolean) {
    this.isLogged = data;
  }
  getIsLogged() {
    return this.isLogged;
  }
}
