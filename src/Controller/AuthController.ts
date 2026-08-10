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

    const { email, senha } = req.body;

    if (!email || !senha) {
        res.status(400).send("E-mail e senha são obrigatórios.");
        return;
    }

    const usuario = repository.listar().find(
        usuario => usuario.getEmail() === email
    );

    if (!usuario) {
        res.status(401).send("E-mail ou senha incorretos.");
        return;
    }

    const senhaValida = await bcrypt.compare(
        senha,
        usuario.getSenha()
    );

    if (!senhaValida) {
        res.status(401).send("E-mail ou senha incorretos.");
        return;
    }

    res.send(`Login realizado. Bem-vindo, ${usuario.getNome()}!`);
}

    logout(req: Request, res: Response): void {

        res.json({
            mensagem: "Logout realizado."
        });

    }
}
