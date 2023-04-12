import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { DecorModel } from '../Models/Decor.model';
import { PrebuiltsModel } from '../Models/Prebuilts.model';
import { AuthService } from './auth.service';
import { baseUrl } from './baseUrl';

@Injectable({ providedIn: 'root' })
export class PrebuildsService {
  constructor(private http: HttpClient, private authService: AuthService) {}
  // baseUrl:string = 'http://localhost:3000/';
  updatedFish = new EventEmitter<boolean>();

  getAllBuilds(): Observable<PrebuiltsModel[]> {
    return this.http.get<PrebuiltsModel[]>(
      `${baseUrl}builds/${
        this.authService.user || sessionStorage.getItem('user')
      }`
    );
  }

  //add Build
  addUserBuild(buildId: string) {
    this.http
      .post<PrebuiltsModel>(
        `${baseUrl}builds/craft/${
          this.authService.user || sessionStorage.getItem('user')
        }?buildId=${buildId}`,
        null
      )
      .subscribe((response: any) => {
        console.log(response);
        if (response.created) {
          this.updatedFish.emit(true);
        }
      });
  }

  //Get the users builds

  getUserBuilds(): Observable<PrebuiltsModel[]> {
    return this.http.get<PrebuiltsModel[]>(
      `${baseUrl}userBuilds/${
        this.authService.user || sessionStorage.getItem('user')
      }`
    );
  }

  //View single builds

  getUserBuild(buildId: string): Observable<PrebuiltsModel> {
    return this.http.get<PrebuiltsModel>(
      `${baseUrl}userBuild/${
        this.authService.user || sessionStorage.getItem('user')
      }?buildId=${buildId}`
    );
  }

  //Update the userbuild fish quantity
  updatedUserBuild(buildId: string,  body: {}): any {
    this.http
      .patch(
        `${baseUrl}userBuild/${
          this.authService.user || sessionStorage.getItem('user')
        }?id=${buildId}`,
        body
      )
      .subscribe((response: any) => {
        console.log(response);
      });
  }
}
