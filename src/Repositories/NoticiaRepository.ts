import { Noticia } from "../Models/Noticia";

export class NoticiaRepository {

    private noticias: Noticia[] = [

        new Noticia(
            1,
            "Alunos do MédioTec reclamam de não poderem utilizar portão entre SENAC e SESC",
            "Estudantes afirmam que o trajeto entre as duas instituições é longo e cansativo. Eles reivindicam a liberação do portão que liga diretamente o SENAC ao SESC para facilitar o deslocamento durante o contraturno.",
            "https://picsum.photos/800/400?random=1",
            1,
            1
        ),

        new Noticia(
            2,
            "Portal Central Senac inicia desenvolvimento",
            "O Portal Central Senac está sendo desenvolvido utilizando Node.js, Express, TypeScript e EJS. O objetivo é permitir a publicação de notícias e facilitar o acesso às informações pelos alunos.",
            "https://picsum.photos/800/400?random=2",
            1,
            1
        ),

        new Noticia(
            3,
            "Novos projetos movimentam as turmas do MédioTec",
            "As turmas do MédioTec continuam desenvolvendo projetos práticos utilizando HTML, CSS, JavaScript, Node.js e bancos de dados durante as aulas de programação.",
            "https://picsum.photos/800/400?random=3",
            2,
            1
        )

    ];

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

        const indice = this.noticias.findIndex(
            noticia => noticia.getId() === id
        );

        if (indice === -1) {
            return false;
        }

        this.noticias[indice] = noticiaAtualizada;

        return true;
    }

    remover(id: number): boolean {

        const indice = this.noticias.findIndex(
            noticia => noticia.getId() === id
        );

        if (indice === -1) {
            return false;
        }

        this.noticias.splice(indice, 1);

        return true;
    }

}