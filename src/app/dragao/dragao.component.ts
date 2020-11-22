import { Component, OnInit } from '@angular/core';
import { DragaoService } from './servicos/dragao.service';
import { Dragao } from './modelos/dragao';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dragao',
  templateUrl: './dragao.component.html',
  styleUrls: ['./dragao.component.scss']
})
export class DragaoComponent implements OnInit {

  dragoes: any = []
  dragoes$: Observable<Dragao[]>
  filteredStates$: Observable<Dragao[]>
  filter: FormControl
  filter$: Observable<string>
  p: number = 1;

  constructor(private dragaoService: DragaoService, private router: Router) {
    this.filter = new FormControl('')

  }

  ngOnInit() {
    this.buscarDragoes()
  }

  buscarDragoes(): Dragao[] {
    this.dragaoService.buscarDragoes()
      .subscribe(
        dragoes => {
          this.dragoes = dragoes
          return this.ordenarDragoes()
        }
      )
    return null
  }

  ordenarDragoes() {
    this.dragoes.sort(function (a, b) {
      return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    })
  }

  excluirDragao(dragao: Dragao) {
    this.dragaoService
      .excluirDragao(dragao)
      .subscribe(() => {
        this.buscarDragoes();
      });
  }

  verDetalhes(dragao: Dragao) {
    sessionStorage.setItem('dragao', JSON.stringify(dragao))
    this.dragaoService.setDragao(dragao);
    this.router.navigate(['/detalhes'])
  }

}