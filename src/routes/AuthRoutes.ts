import { Router } from "express";

export const authRoutes = Router();

authRoutes.get("/login", (req, res) => {
    res.render("login");
});

authRoutes.post("/login", (req, res) => {
    const { email, senha } = req.body;

    res.send("Login realizado.");
});

authRoutes.get("/cadastro", (req, res) => {
    res.render("cadastro");
});

authRoutes.post("/cadastro", (req, res) => {
    const { nome, email, senha } = req.body;

        res.send("Usuário cadastrado.");
    });