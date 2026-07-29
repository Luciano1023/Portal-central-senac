export class Categoria {

    constructor(
        private id: number,
        private nome: string
    ) {}

    public getId(): number {
        return this.id;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {

        if (!nome.trim()) {
            throw new Error("Nome obrigatório.");
        }

        this.nome = nome;
    }

    public toJSON() {
        return {
            id: this.id,
            nome: this.nome
        };
    }

    public static fromJSON(obj: any): Categoria {
        return new Categoria(
            obj.id,
            obj.nome
        );
    }

}