import { Usuario } from "../Models/Usuario";
export class UsuarioRepository {
    buscar(id: number) {
        throw new Error("Method not implemented.");
    }

    private usuarios: Usuario[] = [];

    listar(): Usuario[] {
        return this.usuarios;
    }

    buscarPorId(id: number): Usuario | undefined {
        return this.usuarios.find(usuario => usuario.getId() === id);
    }

    adicionar(usuario: Usuario): void {
        this.usuarios.push(usuario);
    }

    editar(id: number, usuarioAtualizado: Usuario): boolean {

        const indice = this.usuarios.findIndex(usuario => usuario.getId() === id);

        if (indice === -1) {
            return false;
        }

        this.usuarios[indice] = usuarioAtualizado;

        return true;
    }

    remover(id: number): boolean {

        const indice = this.usuarios.findIndex(usuario => usuario.getId() === id);

        if (indice === -1) {
            return false;
        }

        this.usuarios.splice(indice, 1);

        return true;
    }

}