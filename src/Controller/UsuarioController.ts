import { Request, Response } from "express";
import { usuarioRepository as repository } from "../Repositories/UsuarioRepository";
import { Usuario } from "../Models/Usuario";

export class UsuarioController {

    listar(req: Request, res: Response): void {

        const usuarios = repository.listar();

        res.render("usuarios", {
            usuarios
        });
    }

    buscar(req: Request, res: Response): void {

        const id = Number(req.params.id);

        const usuario = repository.buscar(id);

        if (!usuario) {
            res.status(404).send("Usuário não encontrado.");
            return;
        }

        res.render("usuarios", {
            usuarios: [usuario]
        });
    }

    cadastrar(req: Request, res: Response): void {

        const foto = req.file
            ? `/uploads/${req.file.filename}`
            : "/img/default-profile.png";

        const usuario = new Usuario(
            0,
            req.body.nome,
            req.body.email,
            req.body.senha,
            foto
        );

        repository.adicionar(usuario);

        res.redirect("/usuarios");
    }

    editar(req: Request, res: Response): void {

        const id = Number(req.params.id);

        const usuarioExistente = repository.buscar(id);

        if (!usuarioExistente) {
            res.status(404).send("Usuário não encontrado.");
            return;
        }

        const foto = req.file
            ? `/uploads/${req.file.filename}`
            : usuarioExistente.getFoto();

        const usuario = new Usuario(
            id,
            req.body.nome,
            req.body.email,
            req.body.senha,
            foto
        );

        const atualizado = repository.editar(id, usuario);

        if (!atualizado) {
            res.status(404).send("Usuário não encontrado.");
            return;
        }

        res.redirect("/usuarios");
    }

    remover(req: Request, res: Response): void {

        const id = Number(req.params.id);

        const removido = repository.remover(id);

        if (!removido) {
            res.status(404).send("Usuário não encontrado.");
            return;
        }

        res.redirect("/usuarios");
    }
}