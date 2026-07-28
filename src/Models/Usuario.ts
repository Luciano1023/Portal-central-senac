export class Usuario {
    constructor(
        private id: number,
        private nome: string,
        private email: string,
        private senha: string
    ) {}

    public getId(): number {
        return this.id;
    }

    public getNome(): string {
        return this.nome;
    }

    public getEmail(): string {
        return this.email;
    }

    public getSenha(): string {
        return this.senha;
    }

    public setNome(nome: string): void {
        if (!nome.trim()) {
            throw new Error("Nome obrigatório.");
        }

        this.nome = nome;
    }

    public setEmail(email: string): void {
        if (!email.includes("@")) {
            throw new Error("E-mail inválido.");
        }

        this.email = email;
    }

    public setSenha(senha: string): void {
        if (senha.length < 6) {
            throw new Error("A senha deve ter pelo menos 6 caracteres.");
        }

        this.senha = senha;
    }

    public toJSON() {
        return {
            id: this.id,
            nome: this.nome,
            email: this.email,
            senha: this.senha
        };
    }

    public static fromJSON(obj: any): Usuario {
        return new Usuario(
            obj.id,
            obj.nome,
            obj.email,
            obj.senha
        );
    }
}