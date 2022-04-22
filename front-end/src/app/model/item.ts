import { LivroCarrinhoDTO } from "./livroCarrinho";

export interface Item {
    id: number;
    livroCarrinhoDTO: LivroCarrinhoDTO;
    quantidadeDeLivros: number;
    precoItem: number;
}