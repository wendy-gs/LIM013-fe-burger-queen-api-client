import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from '../../services/api/api.service';
import { LoginI } from '../../models/login.model';
import { Router } from '@angular/router';
import { ResponseI } from '../../models/response.model'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html', 
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  
  faUser = faUser;
  faLock = faLock;

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(private api: ApiService, private router:Router) { }

  ngOnInit(): void {
    this.checkLocalStorage();
  }
  
  checkLocalStorage(){
    if(sessionStorage.getItem("token")){
      this.router.navigate(['home-waiter']);
    }
  }

  onLogin(form: LoginI){
    
    this.api.loginByEmail(form).subscribe( data => 
      {
        let dataResponse:ResponseI = data;
        if(dataResponse.token != ''){
          sessionStorage.setItem("token", dataResponse.token!);
          sessionStorage.setItem("email", dataResponse.email!);
          this.router.navigate(['home-waiter']);
        }
      },(error) => {
        alert("Usuario o passaword incorrectos")
      });
    }
}
