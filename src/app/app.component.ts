import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Como treinar o seu Dragao'

  ngOnInit() {
    localStorage.setItem('username', 'login')
    localStorage.setItem('password', 'admin')
    localStorage.setItem('isLogged', 'false')
  }
}
