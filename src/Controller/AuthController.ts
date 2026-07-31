import { Request, Response } from "express";

export class AuthController {

    login(req: Request, res: Response): void {

        res.json({
            mensagem: "Login realizado."
        });

    }

    logout(req: Request, res: Response): void {

        res.json({
            mensagem: "Logout realizado."
        });

    }

}