import { Component, OnInit } from '@angular/core';
import { DragaoService } from '../servicos/dragao.service';
import { Dragao } from '../modelos/dragao';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dragao-detalhe',
  templateUrl: './dragao-detalhe.component.html',
  styleUrls: ['./dragao-detalhe.component.scss']
})
export class DragaoDetalheComponent implements OnInit {

  dragao: any = ''
  formEditarDragao: FormGroup

  constructor(private dragaoService: DragaoService,
    private router: Router,
    private fb: FormBuilder,) { }

  ngOnInit() {

    this.dragao = JSON.parse(sessionStorage.getItem('dragao')) ? JSON.parse(sessionStorage.getItem('dragao')) : '';
    this.dragaoService.emitDragao.subscribe((dragao) =>
      this.setDadosDragao(dragao)
    )

    this.formEditarDragao = this.fb.group({
      name: [this.dragao.name, Validators.required],
      type: [this.dragao.type, Validators.required],
      createdAt: [this.dragao.createdAt, Validators.required],
      id: this.dragao.id
    });
  }

  editarDragao() {
    this.dragaoService
      .editarDragao(this.formEditarDragao)
      .subscribe((dragao) => {
        this.dragaoService.setDragao(dragao);
        this.router.navigate(['/dragoes'])
      });
  }


  setDadosDragao(dragao: Dragao) {
    if (dragao != undefined)
      this.dragao = dragao
    sessionStorage.setItem('dragao', JSON.stringify(dragao))
  }

  voltar() {
    this.router.navigate(['/dragoes'])
  }
}
