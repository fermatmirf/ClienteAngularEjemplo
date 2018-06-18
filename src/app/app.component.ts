import { Component, OnInit, DoCheck } from '@angular/core';
import { UserService } from './services/user/user.service';
import { Router, ActivatedRoute, Params} from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'app';
  public identity;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService){}

  ngOnInit(){
    this.identity = this._userService.getIdentity();
    console.log(this.identity);
  }

  ngDoCheck(){
    this.identity = this._userService.getIdentity();
  }

  logOut(){
    localStorage.clear();
    this.identity = null;
    this._router.navigate(['/']);

  }
}
