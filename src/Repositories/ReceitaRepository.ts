import { Noticia } from "../Models/Noticia";

export class NoticiaRepository {

    private noticias: Noticia[] = [];

    listar(): Noticia[] {
        return this.noticias;
    }

    buscarPorId(id: number): Noticia | undefined {
        return this.noticias.find(noticia => noticia.getId() === id);
    }

    adicionar(noticia: Noticia): void {
        this.noticias.push(noticia);
    }

    editar(id: number, noticiaAtualizada: Noticia): boolean {

        const indice = this.noticias.findIndex(noticia => noticia.getId() === id);

        if (indice === -1) {
            return false;
        }

        this.noticias[indice] = noticiaAtualizada;

        return true;
    }

    remover(id: number): boolean {

        const indice = this.noticias.findIndex(noticia => noticia.getId() === id);

        if (indice === -1) {
            return false;
        }

        this.noticias.splice(indice, 1);

        return true;
    }

}