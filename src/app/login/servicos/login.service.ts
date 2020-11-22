import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  emitAcessoLiberado = new EventEmitter<boolean>()
  constructor() { }

  setAcessoLiberado(liberado: boolean) {
    this.emitAcessoLiberado.emit(liberado);
  }
}
