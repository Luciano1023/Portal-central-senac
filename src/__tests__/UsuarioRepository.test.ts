import { Usuario } from "../Models/Usuario";
import { UsuarioRepository } from "../Repositories/UsuarioRepository";

describe("UsuarioRepository", () => {

    let repository: UsuarioRepository;

    beforeEach(() => {
        repository = new UsuarioRepository();
    });

    test("deve adicionar um usuário", () => {
        const usuario = new Usuario(
            1,
            "João",
            "joao@email.com",
            "123456"
        );

        repository.adicionar(usuario);

        expect(repository.listar()).toHaveLength(1);
        expect(repository.listar()[0].getNome()).toBe("João");
    });

    test("deve listar os usuários", () => {
        repository.adicionar(
            new Usuario(1, "João", "joao@email.com", "123456")
        );

        repository.adicionar(
            new Usuario(2, "Maria", "maria@email.com", "abcdef")
        );

        expect(repository.listar()).toHaveLength(2);
    });

    test("deve buscar um usuário pelo ID", () => {
        const usuario = new Usuario(
            1,
            "João",
            "joao@email.com",
            "123456"
        );

        repository.adicionar(usuario);

        expect(repository.buscarPorId(1)).toBe(usuario);
    });

    test("deve retornar undefined ao buscar um ID inexistente", () => {
        expect(repository.buscarPorId(99)).toBeUndefined();
    });

    test("deve editar um usuário existente", () => {
        const usuario = new Usuario(
            1,
            "João",
            "joao@email.com",
            "123456"
        );

        repository.adicionar(usuario);

        const atualizado = new Usuario(
            1,
            "Maria",
            "maria@email.com",
            "654321"
        );

        expect(repository.editar(1, atualizado)).toBe(true);

        expect(repository.buscarPorId(1)?.getNome()).toBe("Maria");
    });

    test("deve retornar false ao editar um usuário inexistente", () => {
        const usuario = new Usuario(
            1,
            "Maria",
            "maria@email.com",
            "654321"
        );

        expect(repository.editar(99, usuario)).toBe(false);
    });

    test("deve remover um usuário existente", () => {
        const usuario = new Usuario(
            1,
            "João",
            "joao@email.com",
            "123456"
        );

        repository.adicionar(usuario);

        expect(repository.remover(1)).toBe(true);

        expect(repository.listar()).toHaveLength(0);
    });

    test("deve retornar false ao remover um usuário inexistente", () => {
        expect(repository.remover(99)).toBe(false);
    });

});