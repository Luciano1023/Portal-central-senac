import { Router } from "express";
import { AuthController } from "../Controller/AuthController";

export const authRoutes = Router();

const controller = new AuthController();

// Página de login
authRoutes.get("/login", (req, res) => {
    res.render("login");
});

// Realizar login
authRoutes.post("/login", (req, res) => {
    controller.login(req, res);
});

// Página de cadastro
authRoutes.get("/cadastro", (req, res) => {
    res.render("cadastro");
});

// Realizar cadastro
authRoutes.post("/cadastro", (req, res) => {
    controller.cadastrar(req, res);
});

// Realizar logout
authRoutes.post("/logout", (req, res) => {
    controller.logout(req, res);
});
