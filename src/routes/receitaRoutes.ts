import { Router } from "express";
import { NoticiaController } from "../Controller/ReceitaController";

const receitaRoutes = Router();
const controller = new NoticiaController();

// Listar todas as notícias
receitaRoutes.get("/", (req, res) => controller.listar(req, res));

// Cadastrar notícia
receitaRoutes.post("/", (req, res) => controller.cadastrar(req, res));

export { receitaRoutes };