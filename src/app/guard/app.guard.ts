import { Injectable } from '@angular/core'
import { CanLoad, CanActivate, Router } from '@angular/router'

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) {

    }

    canActivate() {
        if (sessionStorage.getItem('isLogged') === 'true') {
            return true
        }
        else this.router.navigate(['/home'])

    }
}