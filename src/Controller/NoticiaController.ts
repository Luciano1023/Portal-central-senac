import { Request, Response } from "express";
import { NoticiaRepository } from "../Repositories/NoticiaRepository";
import { Noticia } from "../Models/Noticia";

const repository = new NoticiaRepository();

export class NoticiaController {

    listar(req: Request, res: Response): void {

        const noticias = repository.listar();

        res.render("noticia", {
            noticias
        });
    }

    buscar(req: Request, res: Response): void {

        const id = Number(req.params.id);

        const noticia = repository.buscarPorId(id);

        if (!noticia) {
            res.status(404).send("Notícia não encontrada.");
            return;
        }

        switch (id) {

            case 1:
                res.render("noticia1", { noticia });
                break;

            case 2:
                res.render("noticia2", { noticia });
                break;

            case 3:
                res.render("noticia3", { noticia });
                break;

            default:
                res.render("noticiadetalhe", {
                    noticia
                });
                break;
        }
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
            res.status(404).json({
                mensagem: "Notícia não encontrada."
            });
            return;
        }

        res.json(noticia);
    }

    remover(req: Request, res: Response): void {

        const id = Number(req.params.id);

        const removido = repository.remover(id);

        if (!removido) {
            res.status(404).json({
                mensagem: "Notícia não encontrada."
            });
            return;
        }

        res.sendStatus(204);
    }
}
