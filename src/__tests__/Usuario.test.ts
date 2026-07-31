import { Usuario } from "../Models/Usuario";

describe("Usuario", () => {

    test("deve criar um usuário corretamente", () => {
        const usuario = new Usuario(
            1,
            "João",
            "joao@email.com",
            "123456"
        );

        expect(usuario.getId()).toBe(1);
        expect(usuario.getNome()).toBe("João");
        expect(usuario.getEmail()).toBe("joao@email.com");
        expect(usuario.getSenha()).toBe("123456");
    });

    test("deve alterar o nome", () => {
        const usuario = new Usuario(
            1,
            "João",
            "joao@email.com",
            "123456"
        );

        usuario.setNome("Maria");

        expect(usuario.getNome()).toBe("Maria");
    });

    test("deve lançar erro para nome vazio", () => {
        const usuario = new Usuario(
            1,
            "João",
            "joao@email.com",
            "123456"
        );

        expect(() => {
            usuario.setNome("");
        }).toThrow("Nome obrigatório.");
    });

    test("deve alterar o e-mail", () => {
        const usuario = new Usuario(
            1,
            "João",
            "joao@email.com",
            "123456"
        );

        usuario.setEmail("maria@email.com");

        expect(usuario.getEmail()).toBe("maria@email.com");
    });

    test("deve lançar erro para e-mail inválido", () => {
        const usuario = new Usuario(
            1,
            "João",
            "joao@email.com",
            "123456"
        );

        expect(() => {
            usuario.setEmail("emailinvalido");
        }).toThrow("E-mail inválido.");
    });

    test("deve alterar a senha", () => {
        const usuario = new Usuario(
            1,
            "João",
            "joao@email.com",
            "123456"
        );

        usuario.setSenha("abcdef");

        expect(usuario.getSenha()).toBe("abcdef");
    });

    test("deve lançar erro para senha curta", () => {
        const usuario = new Usuario(
            1,
            "João",
            "joao@email.com",
            "123456"
        );

        expect(() => {
            usuario.setSenha("123");
        }).toThrow("A senha deve ter pelo menos 6 caracteres.");
    });

    test("deve converter para JSON", () => {
        const usuario = new Usuario(
            1,
            "João",
            "joao@email.com",
            "123456"
        );

        expect(usuario.toJSON()).toEqual({
            id: 1,
            nome: "João",
            email: "joao@email.com",
            senha: "123456"
        });
    });

    test("deve criar usuário a partir de um JSON", () => {
        const usuario = Usuario.fromJSON({
            id: 1,
            nome: "João",
            email: "joao@email.com",
            senha: "123456"
        });

        expect(usuario.getId()).toBe(1);
        expect(usuario.getNome()).toBe("João");
        expect(usuario.getEmail()).toBe("joao@email.com");
        expect(usuario.getSenha()).toBe("123456");
    });

});