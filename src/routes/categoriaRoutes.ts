import { Router } from "express";
import { CategoriaController } from "../Controller/CategoriaController";
import { autenticar } from "../middlewares/authMiddlewares";

const categoriaRoutes = Router();
const controller = new CategoriaController();

categoriaRoutes.get("/", autenticar, (req, res) =>
    controller.listar(req, res)
);

categoriaRoutes.get("/:id", autenticar, (req, res) =>
    controller.buscar(req, res)
);

categoriaRoutes.post("/", autenticar, (req, res) =>
    controller.cadastrar(req, res)
);

categoriaRoutes.put("/:id", autenticar, (req, res) =>
    controller.editar(req, res)
);

categoriaRoutes.delete("/:id", autenticar, (req, res) =>
    controller.remover(req, res)
);

export default categoriaRoutes;
