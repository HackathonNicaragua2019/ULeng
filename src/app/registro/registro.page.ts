import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../shared/user.class';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  user: User = new User();

  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit() {}

  async onRegister(){
    const user = await this.authSvc.onRegister(this.user);
    if (user) {
      console.log('Usuario registrado exitosamente!');
      this.router.navigateByUrl('/');
    }
  }

}
