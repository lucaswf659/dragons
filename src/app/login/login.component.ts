import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './servicos/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  error: string
  liberado: boolean = false


  constructor(private router: Router, private loginService: LoginService, private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    let dadosLogin = this.loginForm.value
    let username = localStorage.getItem('username')
    let password = localStorage.getItem('password')

    if (dadosLogin.username != username || dadosLogin.password != password) {
      this.error = "Senha ou usuário incorreto"
    } else {
      this.liberado = true
    }

    this.loginForm.reset();

    if (this.liberado) {
      sessionStorage.setItem('isLogged', 'true')
      this.loginService.setAcessoLiberado(this.liberado)
      this.router.navigate(['/dragoes']);
    }
  }


}
