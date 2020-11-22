import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DragaoService } from '../servicos/dragao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup;
  constructor(private fb: FormBuilder, private dragaoService: DragaoService, private router: Router) { }

  ngOnInit() {
    this.cadastroForm = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      createdAt: ['', Validators.required]
    })
  }

  cadastrarDragao() {
    this.cadastroForm.value.name = this.firstLetterToUpperCase(this.cadastroForm.value.name)
    this.dragaoService
      .cadastrarDragoes(this.cadastroForm.value)
      .subscribe();
    setTimeout(() => {
      this.router.navigate(['/dragoes']);
    }, 1000);
  }

  firstLetterToUpperCase(nome: string) {
    return nome.charAt(0).toUpperCase() + nome.slice(1);
  }
}
