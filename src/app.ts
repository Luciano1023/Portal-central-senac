import express from "express";
import path from "path";

import { authRoutes } from "./routes/AuthRoutes";
import { categoriaRoutes } from "./routes/categoriaRoutes";
import { receitaRoutes } from "./routes/receitaRoutes";
import { usuarioRoutes } from "./routes/UsuarioRoutes";

const app = express();

// =========================
// Middlewares
// =========================

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Arquivos estáticos (CSS, imagens, etc.)
app.use(express.static(path.join(__dirname, "Public", "html")));

// =========================
// Configuração do EJS
// =========================

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// =========================
// Rotas
// =========================

app.use("/auth", authRoutes);
app.use("/categorias", categoriaRoutes);
app.use("/receitas", receitaRoutes);
app.use("/usuarios", usuarioRoutes);

// =========================
// Rota inicial
// =========================

app.get("/", (req, res) => {
    res.send("API funcionando!");
});

export default app;