import { Categoria } from "../Models/Categoria";
import { CategoriaRepository } from "../Repositories/CategoriaRepository";

describe("CategoriaRepository", () => {

    let repository: CategoriaRepository;

    beforeEach(() => {
        repository = new CategoriaRepository();
    });

    test("deve adicionar uma categoria", () => {
        const categoria = new Categoria(1, "Esportes");

        repository.adicionar(categoria);

        expect(repository.listar()).toHaveLength(1);
        expect(repository.listar()[0].getNome()).toBe("Esportes");
    });

    test("deve listar as categorias", () => {
        repository.adicionar(new Categoria(1, "Esportes"));
        repository.adicionar(new Categoria(2, "Tecnologia"));

        expect(repository.listar()).toHaveLength(2);
    });

    test("deve buscar uma categoria pelo ID", () => {
        const categoria = new Categoria(1, "Esportes");

        repository.adicionar(categoria);

        expect(repository.buscarPorId(1)).toBe(categoria);
    });

    test("deve retornar undefined ao buscar um ID inexistente", () => {
        expect(repository.buscarPorId(99)).toBeUndefined();
    });

    test("deve editar uma categoria existente", () => {
        repository.adicionar(
            new Categoria(1, "Esportes")
        );

        const atualizada = new Categoria(1, "Tecnologia");

        expect(repository.editar(1, atualizada)).toBe(true);

        expect(repository.buscarPorId(1)?.getNome()).toBe("Tecnologia");
    });

    test("deve retornar false ao editar uma categoria inexistente", () => {
        const categoria = new Categoria(1, "Tecnologia");

        expect(repository.editar(99, categoria)).toBe(false);
    });

    test("deve remover uma categoria existente", () => {
        repository.adicionar(
            new Categoria(1, "Esportes")
        );

        expect(repository.remover(1)).toBe(true);

        expect(repository.listar()).toHaveLength(0);
    });

    test("deve retornar false ao remover uma categoria inexistente", () => {
        expect(repository.remover(99)).toBe(false);
    });

});
