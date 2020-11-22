import { Routes } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { DragaoComponent } from './dragao/dragao.component';
import { CadastroComponent } from './dragao/cadastro/cadastro.component';
import { AuthGuard } from './guard/app.guard';
import { NotFoundComponent } from './navegacao/not-found/not-found/not-found.component';
import { DragaoDetalheComponent } from './dragao/detalhe/dragao-detalhe/dragao-detalhe.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/dragoes', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'dragoes', component: DragaoComponent, canActivate: [AuthGuard] },
    { path: 'detalhes', component: DragaoDetalheComponent, canActivate: [AuthGuard] },
    { path: 'cadastrar', component: CadastroComponent, canActivate: [AuthGuard] },
    { path: '**', component: NotFoundComponent }
];