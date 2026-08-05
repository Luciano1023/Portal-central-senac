import { Request, Response } from "express";
import { CategoriaRepository } from "../Repositories/CategoriaRepository";
import { Categoria } from "../Models/Categoria";

const repository = new CategoriaRepository();

export class CategoriaController {

    listar(req: Request, res: Response): void {

        const categorias = repository.listar();

        res.render("categoria", {
            categorias
        });

    }

    buscar(req: Request, res: Response): void {

        const id = Number(req.params.id);

        const categoria = repository.buscarPorId(id);

        if (!categoria) {
            res.status(404).send("Categoria não encontrada.");
            return;
        }

        res.json(categoria);

    }

    cadastrar(req: Request, res: Response): void {

        const categoria = Categoria.fromJSON(req.body);

        repository.adicionar(categoria);

        res.redirect("/categorias");

    }

    editar(req: Request, res: Response): void {

        const id = Number(req.params.id);

        const categoria = Categoria.fromJSON({
            id,
            ...req.body
        });

        const atualizado = repository.editar(id, categoria);

        if (!atualizado) {
            res.status(404).send("Categoria não encontrada.");
            return;
        }

        res.redirect("/categorias");

    }

    remover(req: Request, res: Response): void {

        const id = Number(req.params.id);

        const removido = repository.remover(id);

        if (!removido) {
            res.status(404).send("Categoria não encontrada.");
            return;
        }

        res.redirect("/categorias");

    }

}