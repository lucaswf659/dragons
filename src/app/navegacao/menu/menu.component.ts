import { Component } from '@angular/core';
import { LoginService } from 'src/app/login/servicos/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor(private loginService: LoginService) { }

  liberado: boolean = false
  logado: boolean = false
  ngOnInit() {

    this.loginService.emitAcessoLiberado.subscribe((liberado) =>
      this.liberado = liberado
    )
    if (sessionStorage.getItem('isLogged') === 'true') {
      this.logado = true
    }
  }
}

