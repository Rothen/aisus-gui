import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AppInitService } from '../services/app-init/app-init.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UninitializedGuard implements CanActivate {

    constructor(private appInitService: AppInitService, private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (!this.appInitService.isAISUSInitialized()) {
            return true;
        } else {
            this.router.navigate(['/aisus/system']);
            return false;
        }
    }
}
