import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DecorModel } from '../Models/Decor.model';
import { FishModel } from '../Models/Fish.model';

@Injectable({ providedIn: 'root' })
export class DecorService {
  constructor(private http: HttpClient) {}
  public fish: DecorModel[] = [];
  baseUrl: string = 'http://localhost:3000/';

  getIndividual(id): Observable<DecorModel[]> {
    return this.http.get<DecorModel[]>(`${this.baseUrl}decoration/${id}`);
  }
}
