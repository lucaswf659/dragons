import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Dragao } from '../modelos/dragao';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable()
export class DragaoService {

  emitDragao = new EventEmitter<Dragao>()

  constructor(private httpClient: HttpClient) { }

  buscarDragoes(): Observable<Dragao[]> {
    return this.httpClient
      .get<Dragao[]>('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon')
  }

  cadastrarDragoes(dragao: Dragao): Observable<Dragao[]> {
    return this.httpClient
      .post<Dragao[]>('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon', dragao)
  }

  excluirDragao(dragao: Dragao): Observable<Dragao[]> {
    return this.httpClient
      .delete<Dragao[]>(`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${dragao.id}`)
  }

  editarDragao(formEditarDragao: FormGroup): Observable<Dragao> {
    return this.httpClient
      .put<Dragao>(`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${formEditarDragao.value.id}`, formEditarDragao.value)
  }

  verDetalhes(dragao: Dragao): Observable<Dragao> {
    return this.httpClient
      .get<Dragao>(`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${dragao.id}`)
  }

  setDragao(dragao: Dragao) {
    this.emitDragao.emit(dragao);
  }
}