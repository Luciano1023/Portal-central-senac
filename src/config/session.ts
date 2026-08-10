import session from "express-session";

export const sessionConfig = session({
    secret: "central-senac-secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 1000 * 60 * 60
    }
});
