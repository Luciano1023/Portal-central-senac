import { Request, Response } from "express";
import { UsuarioRepository } from "../Repositories/UsuarioRepository";
import { Usuario } from "../Models/Usuario";

const repository = new UsuarioRepository();

export class UsuarioController {

    listar(req: Request, res: Response): void {
        res.json(repository.listar());
    }

    buscar(req: Request, res: Response): void {
        const id = Number(req.params.id);

        const usuario = repository.buscar(id);

        if (usuario === null) {
            res.status(404).json({ mensagem: "Usuário não encontrado." });
            return;
        }

        res.json(usuario);
    }

    cadastrar(req: Request, res: Response): void {
        const { id, nome, email, senha } = req.body;

        const usuario = new Usuario(
            id,
            nome,
            email,
            senha
        );

        repository.adicionar(usuario);

        res.status(201).json(usuario);
    }

    editar(req: Request, res: Response): void {
        const id = Number(req.params.id);
        const { nome, email, senha } = req.body;

        const usuario = new Usuario(
            id,
            nome,
            email,
            senha
        );

        repository.editar(id, usuario);

        res.json(usuario);
    }

    remover(req: Request, res: Response): void {
        const id = Number(req.params.id);

        repository.remover(id);

        res.sendStatus(204);
    }
}