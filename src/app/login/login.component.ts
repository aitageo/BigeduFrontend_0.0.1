import { Component, OnInit } from '@angular/core';
import { Login } from '../models/users';
import { UsersService } from '../services/users.service';
import { AuthServiceService } from '../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public title:string
  public login : Login

  constructor(private _userService:UsersService,private auth:AuthServiceService,private router:Router) {
    this.title = "Usuario logueado";
    this.login = new Login('','')
   }

  ngOnInit(): void {
    console.log("se ha logueado");
    
  }

  goRegistro(){
   this.router.navigate(['registro'])
  }


  LoginUser(form:any){
    console.log(this.login);
    this._userService.Login(this.login).subscribe(
      response =>{
        console.log(response);
        console.log("Usuario Logueado"); 
      },
      err =>{
        console.error(err);
        
      }
    )
  }

}
