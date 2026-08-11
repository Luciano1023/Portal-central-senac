import multer from "multer";
import path from "path";
import fs from "fs";

const uploadPath = path.join(
    process.cwd(),
    "src",
    "Public",
    "html",
    "img"
);

if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, {
        recursive: true
    });
}

const storage = multer.diskStorage({

    destination: (req, file, cb) => {
        cb(null, uploadPath);
    },

    filename: (req, file, cb) => {

        const extensao = path.extname(file.originalname);

        const nomeArquivo = `${Date.now()}-${Math.round(
            Math.random() * 1E9
        )}${extensao}`;

        cb(null, nomeArquivo);
    }

});

const fileFilter: multer.Options["fileFilter"] = (
    req,
    file,
    cb
) => {

    const tiposPermitidos = [
        "image/jpeg",
        "image/png",
        "image/webp",
        "image/jpg"
    ];

    if (tiposPermitidos.includes(file.mimetype)) {
        cb(null, true);
        return;
    }

    cb(new Error("Apenas imagens JPG, JPEG, PNG e WEBP são permitidas."));
};

export const upload = multer({

    storage,

    fileFilter,

    limits: {
        fileSize: 5 * 1024 * 1024
    }

});