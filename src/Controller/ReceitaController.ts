import { Request, Response } from "express";
import { NoticiaRepository } from "../Repositories/ReceitaRepository";
import { Noticia } from "../Models/Noticia";

const repository = new NoticiaRepository();

export class NoticiaController {

    listar(req: Request, res: Response): void {
        res.json(repository.listar());
    }

    cadastrar(req: Request, res: Response): void {

        const noticia = Noticia.fromJSON(req.body);

        repository.adicionar(noticia);

        res.status(201).json(noticia);

    }

}