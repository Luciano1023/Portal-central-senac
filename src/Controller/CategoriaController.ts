import { Request, Response } from "express";
import { CategoriaRepository } from "../Repositories/CategoriaRepository";
import { Categoria } from "../Models/Categoria";

const repository = new CategoriaRepository();

export class CategoriaController {

    listar(req: Request, res: Response): void {
        res.json(repository.listar());
    }

    buscar(req: Request, res: Response): void {

        const id = Number(req.params.id);

        const categoria = repository.buscarPorId(id);

        if (!categoria) {
            res.status(404).json({ mensagem: "Categoria não encontrada." });
            return;
        }

        res.json(categoria);

    }

    cadastrar(req: Request, res: Response): void {

        const categoria = Categoria.fromJSON(req.body);

        repository.adicionar(categoria);

        res.status(201).json(categoria);

    }

    editar(req: Request, res: Response): void {

        const id = Number(req.params.id);

        const categoria = Categoria.fromJSON({
            id,
            ...req.body
        });

        repository.editar(id, categoria);

        res.json(categoria);

    }

    remover(req: Request, res: Response): void {

        const id = Number(req.params.id);

        repository.remover(id);

        res.sendStatus(204);

    }

}