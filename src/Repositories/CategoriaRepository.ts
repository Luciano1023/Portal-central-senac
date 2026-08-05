import { Categoria } from "../Models/Categoria";

export class CategoriaRepository {

    private categorias: Categoria[] = [

        new Categoria(1, "Política"),
        new Categoria(2, "Esportes"),
        new Categoria(3, "Tecnologia"),
        new Categoria(4, "Economia"),
        new Categoria(5, "Entretenimento"),
        new Categoria(6, "Saúde")

    ];

    listar(): Categoria[] {
        return this.categorias;
    }

    buscarPorId(id: number): Categoria | undefined {
        return this.categorias.find(categoria => categoria.getId() === id);
    }

    adicionar(categoria: Categoria): void {
        this.categorias.push(categoria);
    }

    editar(id: number, categoriaAtualizada: Categoria): boolean {

        const indice = this.categorias.findIndex(
            categoria => categoria.getId() === id
        );

        if (indice === -1) {
            return false;
        }

        this.categorias[indice] = categoriaAtualizada;

        return true;
    }

    remover(id: number): boolean {

        const indice = this.categorias.findIndex(
            categoria => categoria.getId() === id
        );

        if (indice === -1) {
            return false;
        }

        this.categorias.splice(indice, 1);

        return true;
    }

}