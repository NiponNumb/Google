
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {PishingModel} from '../models/Pishing.model';
@Injectable({
  providedIn: 'root'
})
export class PishingService {

  EXAMENUrl: string = `${environment.baseUrl}/Pishing`;
  constructor(private readonly http: HttpClient) {}

  getPishingById(PishId: number) {
    return lastValueFrom(this.http.get<PishingModel>(`${this.EXAMENUrl}/${PishId}`));
  }

  getPishing(): Promise<PishingModel[]> {
    return lastValueFrom(this.http.get<PishingModel[]>(`${this.EXAMENUrl}`));
  }

  postPishing(pishing: PishingModel) {
    return lastValueFrom(this.http.post(`${this.EXAMENUrl}`, pishing));
  }
  
  putPishing(pishing: PishingModel, PishId: number) { 
    return lastValueFrom(this.http.put(`${this.EXAMENUrl}`, pishing));
  }

  deletePishing(PishId: any) {
    return lastValueFrom(this.http.delete(`${this.EXAMENUrl}/${PishId}`));
  }
}