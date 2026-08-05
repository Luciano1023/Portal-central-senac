import express from "express";
import path from "path";

import { authRoutes } from "./routes/AuthRoutes";
import categoriaRoutes from "./routes/categoriaRoutes";
import NoticiaRoutes from "./routes/NoticiaRoutes";
import { usuarioRoutes } from "./routes/UsuarioRoutes";

const app = express();

// =========================
// Middlewares
// =========================

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Arquivos estáticos (CSS, imagens, JS)
app.use(express.static(path.join(__dirname, "Public")));

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
<<<<<<< HEAD
app.use("/noticias", NoticiaRoutes);
=======
app.use("/noticias", receitaRoutes);
>>>>>>> 06af25e9ef27dc9f8e630541dadf68e9fb016d79
app.use("/usuarios", usuarioRoutes);

// =========================
// Página inicial
// =========================

app.get("/", (req, res) => {
    res.redirect("/noticias");
});

export default app;