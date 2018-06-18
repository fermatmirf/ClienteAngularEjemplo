import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { User } from '../models/user';
import { Router} from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{
    public title:string;
    public user: User;
    public status: string;

    constructor(public userService: UserService){
      this.user = new User("","","","","","","ROLE_USER","");
    }

    ngOnInit(){
        console.log('Componente register cargado');
    }

    onSubmit(registerForm):void{
        this.userService.register(this.user).subscribe(
          (response) => {
            if(response.user && response.user._id){
              console.log(response.user);
              this.status = 'success';
              registerForm.reset();
            }
            else{
              this.status = 'error';
            }
          },
          (error) => {
            console.log(<any>error);
        });
    }
        /*this.userService.register(this.user).subscribe(
          (response) => { 
            this.user1 = response['user'];
            if(this.user1 && this.user1._id){
              this.status = 'success'
            }
          },
          (error) => {
            this.status = 'error';
          }
        );*/
      
}