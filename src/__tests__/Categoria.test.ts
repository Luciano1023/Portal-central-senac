import { Categoria } from "../Models/Categoria";

describe("Categoria", () => {
    test("deve criar uma categoria corretamente", () => {
        const categoria = new Categoria(1, "Esportes");

        expect(categoria.getId()).toBe(1);
        expect(categoria.getNome()).toBe("Esportes");
    });

    test("deve alterar o nome", () => {
        const categoria = new Categoria(1, "Esportes");

        categoria.setNome("Tecnologia");

        expect(categoria.getNome()).toBe("Tecnologia");
    });

    test("deve lançar erro quando o nome estiver vazio", () => {
        const categoria = new Categoria(1, "Esportes");

        expect(() => categoria.setNome("")).toThrow("Nome obrigatório.");
    });
});