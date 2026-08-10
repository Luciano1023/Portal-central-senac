import { Router } from "express";
import { UsuarioController } from "../Controller/UsuarioController";
import { autenticar } from "../middlewares/authMiddlewares";

const usuarioRoutes = Router();
const controller = new UsuarioController();

usuarioRoutes.get("/", autenticar, (req, res) =>
    controller.listar(req, res)
);

usuarioRoutes.get("/:id", autenticar, (req, res) =>
    controller.buscar(req, res)
);

usuarioRoutes.post("/", autenticar, (req, res) =>
    controller.cadastrar(req, res)
);

usuarioRoutes.put("/:id", autenticar, (req, res) =>
    controller.editar(req, res)
);

usuarioRoutes.delete("/:id", autenticar, (req, res) =>
    controller.remover(req, res)
);

export { usuarioRoutes };
