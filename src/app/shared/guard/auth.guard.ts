import { LoginService } from 'src/app/shared/service/login.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private accountService: LoginService){
  }

  async canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {

    const token = {
      token: window.localStorage.getItem('token')
    };

    const tokenValid = await this.accountService.tokenIsValid(token);

    if (tokenValid){
      return true;
    }

    else {
      this.router.navigate(['login']);
      return false;
    }
  }

}
