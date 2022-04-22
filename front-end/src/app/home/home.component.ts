import { Component, OnInit } from '@angular/core';
import { Livro } from '../model/livro';
import { CarrinhoService } from '../services/carrinho.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor(private carrinhoService: CarrinhoService) {

  }

  ngOnInit(): void {
    if (!localStorage.length) {     
      this.carrinhoService.criarCarrinho();
    }
  }


}
