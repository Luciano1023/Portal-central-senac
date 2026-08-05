import { Router } from "express";
import { UsuarioController } from "../Controller/UsuarioController";

const usuarioRoutes = Router();
const controller = new UsuarioController();

usuarioRoutes.get("/", (req, res) => controller.listar(req, res));
usuarioRoutes.get("/:id", (req, res) => controller.buscar(req, res));
usuarioRoutes.post("/", (req, res) => controller.cadastrar(req, res));
usuarioRoutes.put("/:id", (req, res) => controller.editar(req, res));
usuarioRoutes.delete("/:id", (req, res) => controller.remover(req, res));

export { usuarioRoutes };