import { Request, Response } from "express";
import { NoticiaRepository } from "../Repositories/NoticiaRepository";
import { Noticia } from "../Models/Noticia";

const repository = new NoticiaRepository();

export class NoticiaController {

    listar(req: Request, res: Response): void {
        res.render("noticias");
    }

    buscar(req: Request, res: Response): void {

        const id = Number(req.params.id);

        const noticia = repository.buscarPorId(id);

        if (!noticia) {
            res.status(404).json({ mensagem: "Notícia não encontrada." });
            return;
        }

        res.json(noticia);
    }

    cadastrar(req: Request, res: Response): void {

        const noticia = Noticia.fromJSON(req.body);

        repository.adicionar(noticia);

        res.status(201).json(noticia);
    }

    editar(req: Request, res: Response): void {

        const id = Number(req.params.id);

        const noticia = Noticia.fromJSON({
            id,
            ...req.body
        });

        const atualizado = repository.editar(id, noticia);

        if (!atualizado) {
            res.status(404).json({ mensagem: "Notícia não encontrada." });
            return;
        }

        res.json(noticia);
    }

    remover(req: Request, res: Response): void {

        const id = Number(req.params.id);

        const removido = repository.remover(id);

        if (!removido) {
            res.status(404).json({ mensagem: "Notícia não encontrada." });
            return;
        }

        res.sendStatus(204);
    }
}