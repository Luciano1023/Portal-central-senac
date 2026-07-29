export class Noticia {

    constructor(
        private id: number,
        private titulo: string,
        private conteudo: string,
        private imagem: string,
        private categoriaId: number,
        private autorId: number
    ) {}

    public getId(): number {
        return this.id;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public getConteudo(): string {
        return this.conteudo;
    }

    public getImagem(): string {
        return this.imagem;
    }

    public getCategoriaId(): number {
        return this.categoriaId;
    }

    public getAutorId(): number {
        return this.autorId;
    }

    public setTitulo(titulo: string): void {

        if (!titulo.trim()) {
            throw new Error("Título obrigatório.");
        }

        this.titulo = titulo;
    }

    public setConteudo(conteudo: string): void {

        if (conteudo.length < 20) {
            throw new Error("A notícia deve possuir pelo menos 20 caracteres.");
        }

        this.conteudo = conteudo;
    }

    public setImagem(imagem: string): void {
        this.imagem = imagem;
    }

    public setCategoriaId(id: number): void {
        this.categoriaId = id;
    }

    public toJSON() {
        return {
            id: this.id,
            titulo: this.titulo,
            conteudo: this.conteudo,
            imagem: this.imagem,
            categoriaId: this.categoriaId,
            autorId: this.autorId
        };
    }

    public static fromJSON(obj: any): Noticia {
        return new Noticia(
            obj.id,
            obj.titulo,
            obj.conteudo,
            obj.imagem,
            obj.categoriaId,
            obj.autorId
        );
    }

}