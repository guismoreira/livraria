import { Livro } from './livro';
export interface Categoria {
  id: number;
  nome: string;
  descricao: string;
  livros?: Livro[];
}
