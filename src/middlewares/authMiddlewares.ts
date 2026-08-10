import { Request, Response, NextFunction } from "express";
import { usuarioRepository } from "../Repositories/UsuarioRepository";

export function autenticar(
    req: Request,
    res: Response,
    next: NextFunction
): void {

    const usuarioId = req.session.usuarioId;

    if (!usuarioId) {
        res.redirect("/auth/login");
        return;
    }

    const usuario = usuarioRepository.buscar(usuarioId);

    if (!usuario) {
        req.session.destroy(() => {
            res.redirect("/auth/login");
        });
        return;
    }

    next();
}
