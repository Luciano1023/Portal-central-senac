import { Router } from "express";
import { UsuarioController } from "../Controller/UsuarioController";

const router = Router();
const controller = new UsuarioController();

router.get("/", controller.listar);
router.get("/:id", controller.buscar);
router.post("/", controller.cadastrar);
router.put("/:id", controller.editar);
router.delete("/:id", controller.remover);

export default router;