import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item';
import { LivroCarrinhoDTO } from 'src/app/model/livroCarrinho';
import { CarrinhoService } from 'src/app/services/carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
})
export class CarrinhoComponent implements OnInit {
  
  carrinho: any;

  constructor(private carrinhoService: CarrinhoService) {}

  ngOnInit(): void {
    if (localStorage.length != 0) {
      this.carrinhoService.buscarCarrinho();  
    } else {
      this.carrinhoService.criarCarrinho();
    }
    setTimeout(() => {this.buscarLivros()}, 1*1000);    
  }

  buscarLivros() {    
    return this.carrinhoService
      .buscarLivros()
      .subscribe((response) => (this.carrinho = response));
  }  

  calcularPreco(a: number, b: number) {
    return a * b;
  }

  limparCarrinho() {
    this.carrinhoService.limparCarrinho();
    location.reload();
  }

  aumentarItem(itemId: number):void {
    this.carrinhoService.aumentarItem(itemId);
  }

  diminuirItem(itemId: number):void {
    this.carrinhoService.diminuirItem(itemId);
  }

  removerItem(carrinhoId : number, item: Item){
    this.carrinhoService.removerDoCarrinho(carrinhoId, item);
  }

}
