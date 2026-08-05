import { Router } from "express";
import { CategoriaController } from "../Controller/CategoriaController";

const categoriaRoutes = Router();
const controller = new CategoriaController();

categoriaRoutes.get("/", (req, res) => controller.listar(req, res));
categoriaRoutes.get("/:id", (req, res) => controller.buscar(req, res));
categoriaRoutes.post("/", (req, res) => controller.cadastrar(req, res));
categoriaRoutes.put("/:id", (req, res) => controller.editar(req, res));
categoriaRoutes.delete("/:id", (req, res) => controller.remover(req, res));

export default categoriaRoutes;