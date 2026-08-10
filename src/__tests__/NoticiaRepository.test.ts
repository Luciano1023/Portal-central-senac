import { Noticia } from "../Models/Noticia";
import { NoticiaRepository } from "../Repositories/NoticiaRepository";

describe("NoticiaRepository", () => {

    let repository: NoticiaRepository;

    beforeEach(() => {
        repository = new NoticiaRepository();
    });

    test("deve adicionar uma notícia", () => {
        const noticia = new Noticia(
            1,
            "Título",
            "Conteúdo da notícia com mais de vinte caracteres.",
            "imagem.jpg",
            1,
            1
        );

        repository.adicionar(noticia);

        expect(repository.listar()).toHaveLength(1);
        expect(repository.listar()[0].getTitulo()).toBe("Título");
    });

    test("deve listar as notícias", () => {
        repository.adicionar(
            new Noticia(
                1,
                "Título 1",
                "Conteúdo da primeira notícia com mais de vinte caracteres.",
                "img1.jpg",
                1,
                1
            )
        );

        repository.adicionar(
            new Noticia(
                2,
                "Título 2",
                "Conteúdo da segunda notícia com mais de vinte caracteres.",
                "img2.jpg",
                2,
                1
            )
        );

        expect(repository.listar()).toHaveLength(2);
    });

    test("deve buscar uma notícia pelo ID", () => {
        const noticia = new Noticia(
            1,
            "Título",
            "Conteúdo da notícia com mais de vinte caracteres.",
            "imagem.jpg",
            1,
            1
        );

        repository.adicionar(noticia);

        expect(repository.buscarPorId(1)).toBe(noticia);
    });

    test("deve retornar undefined ao buscar um ID inexistente", () => {
        expect(repository.buscarPorId(99)).toBeUndefined();
    });

    test("deve editar uma notícia existente", () => {
        repository.adicionar(
            new Noticia(
                1,
                "Título",
                "Conteúdo da notícia com mais de vinte caracteres.",
                "imagem.jpg",
                1,
                1
            )
        );

        const atualizada = new Noticia(
            1,
            "Novo título",
            "Novo conteúdo da notícia com mais de vinte caracteres.",
            "nova.jpg",
            2,
            1
        );

        expect(repository.editar(1, atualizada)).toBe(true);

        expect(repository.buscarPorId(1)?.getTitulo()).toBe("Novo título");
    });

    test("deve retornar false ao editar uma notícia inexistente", () => {
        const noticia = new Noticia(
            1,
            "Título",
            "Conteúdo da notícia com mais de vinte caracteres.",
            "imagem.jpg",
            1,
            1
        );

        expect(repository.editar(99, noticia)).toBe(false);
    });

    test("deve remover uma notícia existente", () => {
        repository.adicionar(
            new Noticia(
                1,
                "Título",
                "Conteúdo da notícia com mais de vinte caracteres.",
                "imagem.jpg",
                1,
                1
            )
        );

        expect(repository.remover(1)).toBe(true);

        expect(repository.listar()).toHaveLength(0);
    });

    test("deve retornar false ao remover uma notícia inexistente", () => {
        expect(repository.remover(99)).toBe(false);
    });

});
