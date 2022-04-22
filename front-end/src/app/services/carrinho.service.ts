import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Item } from '../model/item';
import { LivroCarrinhoDTO } from '../model/livroCarrinho';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  livros: Item[] = [];

  private storage: Storage = window.localStorage;

  carrinho: any;

  carrinhoId: any;

  constructor(private http: HttpClient) {
  }

  adicionarAoCarrinho(item: Item) {
    let carrinhoId = JSON.parse(localStorage.getItem('carrinho') || '');
    return this.http.put(environment.API_URL + '/carrinhos/adicionar/' + carrinhoId, item).subscribe()
  }

  aumentarItem(itemId: number) {    
    location.reload()
    this.http.put(environment.API_URL + '/itens/aumentar/'+ itemId, null).subscribe();
  }

  diminuirItem(itemId: number):void {
    location.reload()
    this.http.put(environment.API_URL + '/itens/diminuir/' + itemId, null).subscribe();    
  }

  criarCarrinho() {
    this.http
      .post(environment.API_URL + '/carrinhos/criar', null)
      .subscribe((response) => {
        this.carrinho = response;
        this.storage.setItem('carrinho', JSON.stringify(this.carrinho['id']));
      });
  }

  buscarCarrinho(){
    let carrinhoId = JSON.parse(localStorage.getItem('carrinho') || '');
    return this.http.get(environment.API_URL+'/carrinhos/'+ carrinhoId)    
  }

  buscarLivros() {
    let carrinhoId = JSON.parse(localStorage.getItem('carrinho') || '');
    return this.http.get(environment.API_URL + '/carrinhos/' + carrinhoId)
  }

  removerDoCarrinho(carrinhoId: number, item: Item) {
    location.reload()
    return this.http.put(environment.API_URL + '/carrinhos/remover/' + carrinhoId, item).subscribe();
  }

  limparCarrinho(): boolean {
    if (this.storage) {
      let carrinhoId = this.storage.getItem('carrinho');
      console.log(environment.API_URL + '/carrinhos/' + carrinhoId);
      this.http.delete(environment.API_URL + '/carrinhos/' + carrinhoId).subscribe();
      this.storage.clear();
      return true;
    }
    return false;
  }

  converterParaItem(livro: LivroCarrinhoDTO): Item {
    return {
      id: livro.id,
      livroCarrinhoDTO: livro,
      quantidadeDeLivros: 1,
      precoItem: livro.preco,
    };
  }
}
