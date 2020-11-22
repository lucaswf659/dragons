import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { HomeComponent } from './navegacao/home/home.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { DragaoComponent } from './dragao/dragao.component';
import { rootRouterConfig } from './app.routes';
import { DragaoService } from './dragao/servicos/dragao.service';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './dragao/cadastro/cadastro.component';
import { AuthGuard } from './guard/app.guard';
import { NotFoundComponent } from './navegacao/not-found/not-found/not-found.component';
import { DragaoDetalheComponent } from './dragao/detalhe/dragao-detalhe/dragao-detalhe.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    DragaoComponent,
    LoginComponent,
    CadastroComponent,
    NotFoundComponent,
    DragaoDetalheComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash: false }),
      BrowserAnimationsModule]
  ],
  providers: [
    DragaoService,
    AuthGuard,
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
