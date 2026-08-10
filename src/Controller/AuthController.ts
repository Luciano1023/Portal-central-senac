import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { usuarioRepository as repository } from "../Repositories/UsuarioRepository";
import { Usuario } from "../Models/Usuario";

export class AuthController {

    async cadastrar(req: Request, res: Response): Promise<void> {

        const { nome, email, senha, confirmarSenha } = req.body;

        if (!nome || !email || !senha) {
            res.status(400).send("Todos os campos são obrigatórios.");
            return;
        }

        if (senha !== confirmarSenha) {
            res.status(400).send("As senhas não coincidem.");
            return;
        }

        const usuarioExistente = repository.listar().find(
            usuario => usuario.getEmail() === email
        );

        if (usuarioExistente) {
            res.status(400).send("Este e-mail já está cadastrado.");
            return;
        }

        const senhaHash = await bcrypt.hash(senha, 10);

        const usuario = new Usuario(
            0,
            nome,
            email,
            senhaHash
        );

        repository.adicionar(usuario);

        res.redirect("/auth/login");
    }

    async login(req: Request, res: Response): Promise<void> {

        res.status(501).send("Login ainda será implementado.");
    }

    logout(req: Request, res: Response): void {

        res.json({
            mensagem: "Logout realizado."
        });

    }
}
