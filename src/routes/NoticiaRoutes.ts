import { Router } from "express";
import { NoticiaController } from "../Controller/NoticiaController";
import { autenticar } from "../middlewares/authMiddlewares";

const router = Router();
const controller = new NoticiaController();

// Página de notícias — pública
router.get("/", (req, res) => controller.listar(req, res));

// Visualização de uma notícia — pública
router.get("/:id", (req, res) => controller.buscar(req, res));

// Cadastrar notícia — somente usuários autenticados
router.post("/", autenticar, (req, res) =>
    controller.cadastrar(req, res)
);

// Editar notícia — somente usuários autenticados
router.put("/:id", autenticar, (req, res) =>
    controller.editar(req, res)
);

// Remover notícia — somente usuários autenticados
router.delete("/:id", autenticar, (req, res) =>
    controller.remover(req, res)
);

export default router;
