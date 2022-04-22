import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/model/item';
import { Livro } from 'src/app/model/livro';
import { LivroCarrinhoDTO } from 'src/app/model/livroCarrinho';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { DetalhesLivroService } from '../../services/detalhes-livro-service';

@Component({
  selector: 'app-detalhes-livro',
  templateUrl: './detalhes-livro.component.html',
  styleUrls: ['./detalhes-livro.component.css'],
})
export class DetalhesLivroComponent implements OnInit {
  item: Item = {} as Item;
  livro: Livro = {} as Livro;
  errorMsg: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private service: DetalhesLivroService,
    private carrinhoService: CarrinhoService
  ) {}

  ngOnInit(): void {
    const livroId = Number(this.route.snapshot.paramMap.get('id'));
    this.service.find(livroId).subscribe(
      (livro) => {
        this.livro = livro;
      },
      (err) => {
        this.errorMsg = err;
      }
    );
    if (localStorage.length != 0) {
      this.carrinhoService.buscarCarrinho();  
    } else {
      this.carrinhoService.criarCarrinho();
    }   
  }

  adicionarItemAoCarrinho(livro: Livro) {
    let livroCarrinho = this.converterParaLivroCarrinho(livro);
    let item = this.converterParaItem(livroCarrinho)
    return this.carrinhoService.adicionarAoCarrinho(item);
  }

  converterParaLivroCarrinho(livro: Livro): LivroCarrinhoDTO {
    return {
      id: livro.id,
      capa: livro.capa,
      titulo: livro.titulo,
      preco: livro.preco
    };
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
