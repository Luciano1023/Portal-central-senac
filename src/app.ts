import express from "express";
import path from "path";

import { sessionConfig } from "./config/session";

import { authRoutes } from "./routes/AuthRoutes";
import categoriaRoutes from "./routes/categoriaRoutes";
import NoticiaRoutes from "./routes/NoticiaRoutes";
import { usuarioRoutes } from "./routes/UsuarioRoutes";

import { usuarioRepository } from "./Repositories/UsuarioRepository";

const app = express();

// =========================
// Caminho dos arquivos do projeto
// =========================

const publicPath = path.join(__dirname, "..", "src", "Public");
const viewsPath = path.join(__dirname, "..", "src", "views");

// =========================
// Middlewares
// =========================

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(sessionConfig);

// =========================
// Usuário logado
// =========================

app.use((req, res, next) => {

    if (req.session.usuarioId) {

        const usuario = usuarioRepository.buscar(
            req.session.usuarioId
        );

        res.locals.usuarioLogado = usuario;

    } else {

        res.locals.usuarioLogado = undefined;

    }

    next();
});

// =========================
// Arquivos estáticos
// =========================

app.use(express.static(publicPath));

// =========================
// Configuração do EJS
// =========================

app.set("view engine", "ejs");
app.set("views", viewsPath);

// =========================
// Rotas
// =========================

app.use("/auth", authRoutes);
app.use("/categorias", categoriaRoutes);
app.use("/noticias", NoticiaRoutes);
app.use("/usuarios", usuarioRoutes);

// =========================
// Página inicial
// =========================

app.get("/", (req, res) => {
    res.redirect("/noticias");
});

export default app;