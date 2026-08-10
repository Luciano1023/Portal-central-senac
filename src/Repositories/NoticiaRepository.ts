import { Noticia } from "../Models/Noticia";

export class NoticiaRepository {

    private noticias: Noticia[] = [

        new Noticia(
            1,
            "Alunos do MédioTec reclamam de não poderem utilizar portão entre SENAC e SESC durante contraturnos",
            "Alunos do MédioTec reclamam das condições de deslocamento entre o SENAC e o SESC durante os contraturnos e reivindicam a liberação do portão que liga diretamente as duas instituições.",
            "/img/portaotrancado.webp",
            1,
            1
        ),

        new Noticia(
            2,
            "Após cerca de três meses sem psicóloga, SENAC recebe nova profissional para atendimento aos alunos",
            "Após aproximadamente três meses sem uma psicóloga disponível de forma regular, o SENAC recebe Thainná Sandy, nova profissional que chega para retomar o atendimento psicológico aos alunos.",
            "/img/psicologa.png",
            1,
            1
        ),

        new Noticia(
            3,
            "Prova de Química é realizada no Laboratório de TI após descoberta de fraude em avaliações digitais",
            "Após a descoberta de uma possível vulnerabilidade nas avaliações digitais, a prova de Química passou a ser realizada no Laboratório de TI, com computadores que possuem mecanismos de segurança mais rigorosos.",
            "/img/laboratorio.jpeg",
            2,
            1
        )

    ];

    listar(): Noticia[] {
        return this.noticias;
    }

    buscarPorId(id: number): Noticia | undefined {
        return this.noticias.find(
            noticia => noticia.getId() === id
        );
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
