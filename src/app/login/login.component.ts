import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserServicesService } from '../api/user.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, 
    protected clienteService: 
    UserServicesService, private fb: FormBuilder) {}

  private reponse: any;
  loginForm: FormGroup;

  ngOnInit() {
      this.loginForm = this.fb.group({
          user: new FormControl('', []),
          clave: new FormControl('', [])
        });
  }
  users;

  onLogin() {
    var user = this.loginForm.get('user').value;
    var clave = this.loginForm.get('clave').value;

    if (user == '' && clave == '') {
      Swal.fire('Favor Llene los Campos');
    } else {
      this.clienteService.getUsers(user, clave).subscribe(
        data => {
          // Success
          this.users = data;
          console.log(data);
          console.log(user + ' ' + clave );
          this.router.navigate(['/gymread']);
          this.reponse = data;
          localStorage.set('user', data);
          if (this.users.Usuario_UserName == user && this.users.Usuario_Password == clave) {
            console.log('Login Correcto');
            localStorage.setItem('isLoggedin', 'true');
          }
        },
        error => {
          Swal.fire('Clave o Usuario Incorrecto, Intente Nuevamente...');
        }
      );
    }
  }
}
