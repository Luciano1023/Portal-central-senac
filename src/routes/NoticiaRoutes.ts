import { Router } from "express";
import { NoticiaController } from "../Controller/NoticiaController";

const router = Router();
const controller = new NoticiaController();

// Página de notícias
router.get("/", (req, res) => controller.listar(req, res));

// Buscar notícia por ID
router.get("/:id", (req, res) => controller.buscar(req, res));

// Cadastrar notícia
router.post("/", (req, res) => controller.cadastrar(req, res));

// Editar notícia
router.put("/:id", (req, res) => controller.editar(req, res));

// Remover notícia
router.delete("/:id", (req, res) => controller.remover(req, res));

export default router;