import { Router } from "express";
import { AuthController } from "../Controller/AuthController";

export const authRoutes = Router();

const controller = new AuthController();

authRoutes.get("/login", (req, res) => {
    res.render("login");
});

authRoutes.post("/login", (req, res) => {
    controller.login(req, res);
});

authRoutes.get("/cadastro", (req, res) => {
    res.render("cadastro");
});

authRoutes.post("/cadastro", (req, res) => {
    controller.cadastrar(req, res);
});

authRoutes.post("/logout", (req, res) => {
    controller.logout(req, res);
});
