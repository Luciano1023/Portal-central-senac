import { Noticia } from "../Models/Noticia";

describe("Noticia", () => {

    test("deve criar uma notícia corretamente", () => {
        const noticia = new Noticia(
            1,
            "Título",
            "Conteúdo da notícia com mais de vinte caracteres.",
            "imagem.jpg",
            1,
            1
        );

        expect(noticia.getId()).toBe(1);
        expect(noticia.getTitulo()).toBe("Título");
        expect(noticia.getConteudo()).toBe("Conteúdo da notícia com mais de vinte caracteres.");
        expect(noticia.getImagem()).toBe("imagem.jpg");
        expect(noticia.getCategoriaId()).toBe(1);
        expect(noticia.getAutorId()).toBe(1);
    });

    test("deve alterar o título", () => {
        const noticia = new Noticia(
            1,
            "Título",
            "Conteúdo da notícia com mais de vinte caracteres.",
            "imagem.jpg",
            1,
            1
        );

        noticia.setTitulo("Novo título");

        expect(noticia.getTitulo()).toBe("Novo título");
    });

    test("deve lançar erro para título vazio", () => {
        const noticia = new Noticia(
            1,
            "Título",
            "Conteúdo da notícia com mais de vinte caracteres.",
            "imagem.jpg",
            1,
            1
        );

        expect(() => {
            noticia.setTitulo("");
        }).toThrow("Título obrigatório.");
    });

    test("deve alterar o conteúdo", () => {
        const noticia = new Noticia(
            1,
            "Título",
            "Conteúdo da notícia com mais de vinte caracteres.",
            "imagem.jpg",
            1,
            1
        );

        noticia.setConteudo("Novo conteúdo da notícia com mais de vinte caracteres.");

        expect(noticia.getConteudo()).toBe("Novo conteúdo da notícia com mais de vinte caracteres.");
    });

    test("deve lançar erro para conteúdo muito curto", () => {
        const noticia = new Noticia(
            1,
            "Título",
            "Conteúdo da notícia com mais de vinte caracteres.",
            "imagem.jpg",
            1,
            1
        );

        expect(() => {
            noticia.setConteudo("Curto");
        }).toThrow("A notícia deve possuir pelo menos 20 caracteres.");
    });

    test("deve alterar a imagem", () => {
        const noticia = new Noticia(
            1,
            "Título",
            "Conteúdo da notícia com mais de vinte caracteres.",
            "imagem.jpg",
            1,
            1
        );

        noticia.setImagem("nova-imagem.png");

        expect(noticia.getImagem()).toBe("nova-imagem.png");
    });

    test("deve alterar a categoria", () => {
        const noticia = new Noticia(
            1,
            "Título",
            "Conteúdo da notícia com mais de vinte caracteres.",
            "imagem.jpg",
            1,
            1
        );

        noticia.setCategoriaId(5);

        expect(noticia.getCategoriaId()).toBe(5);
    });

    test("deve converter para JSON", () => {
        const noticia = new Noticia(
            1,
            "Título",
            "Conteúdo da notícia com mais de vinte caracteres.",
            "imagem.jpg",
            1,
            1
        );

        expect(noticia.toJSON()).toEqual({
            id: 1,
            titulo: "Título",
            conteudo: "Conteúdo da notícia com mais de vinte caracteres.",
            imagem: "imagem.jpg",
            categoriaId: 1,
            autorId: 1
        });
    });

    test("deve criar notícia a partir de um JSON", () => {
        const noticia = Noticia.fromJSON({
            id: 1,
            titulo: "Título",
            conteudo: "Conteúdo da notícia com mais de vinte caracteres.",
            imagem: "imagem.jpg",
            categoriaId: 1,
            autorId: 1
        });

        expect(noticia.getId()).toBe(1);
        expect(noticia.getTitulo()).toBe("Título");
        expect(noticia.getConteudo()).toBe("Conteúdo da notícia com mais de vinte caracteres.");
        expect(noticia.getImagem()).toBe("imagem.jpg");
        expect(noticia.getCategoriaId()).toBe(1);
        expect(noticia.getAutorId()).toBe(1);
    });

});