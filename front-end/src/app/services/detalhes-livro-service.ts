import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Livro } from 'src/app/model/livro';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DetalhesLivroService {
  

  constructor(private http: HttpClient) {}

  find(id: number): Observable<Livro> {
    return this.http.get<Livro>(environment.API_URL + '/livros/' + id);
  }
}
