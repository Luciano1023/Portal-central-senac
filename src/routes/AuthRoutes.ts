import { Router } from "express";
import { AuthController } from "../Controller/AuthController";
import { upload } from "../config/multer";

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

// Realizar cadastro com foto
authRoutes.post(
    "/cadastro",
    upload.single("foto"),
    (req, res) => {
        controller.cadastrar(req, res);
    }
);

// Realizar logout
authRoutes.post("/logout", (req, res) => {
    controller.logout(req, res);
});