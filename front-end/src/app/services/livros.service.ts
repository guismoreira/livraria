import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livro } from 'src/app/model/livro';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LivrosService {
  constructor(private http: HttpClient, private router: Router) {}

  buscarLivrosPorCategoria(nome: string, request: any): Observable<any> {
    const params = request;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    return this.http.get<Livro[]>(environment.API_URL + '/livros/categorias/' + nome, {params});
  }

  buscarLivrosPorTituloOuAutor(nome: string, request: any): Observable<any> {
    const params = request;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    return this.http.get<Livro[]>(environment.API_URL + '/livros/procurar/' + nome, {params});
  }

  buscarTodosLivros(request: any): Observable<any> {
		const params = request;
		return this.http.get(environment.API_URL + '/livros', {params});
	}
}
