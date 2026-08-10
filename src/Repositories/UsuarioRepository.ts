import { Usuario } from "../Models/Usuario";

export class UsuarioRepository {

    private usuarios: Usuario[] = [];

    private proximoId: number = 1;

    listar(): Usuario[] {
        return this.usuarios;
    }

    buscar(id: number): Usuario | undefined {
        return this.usuarios.find(
            usuario => usuario.getId() === id
        );
    }

    buscarPorId(id: number): Usuario | undefined {
        return this.usuarios.find(
            usuario => usuario.getId() === id
        );
    }

    adicionar(usuario: Usuario): void {

        const usuarioComId = new Usuario(
            this.proximoId,
            usuario.getNome(),
            usuario.getEmail(),
            usuario.getSenha()
        );

        this.usuarios.push(usuarioComId);

        this.proximoId++;
    }

    editar(id: number, usuarioAtualizado: Usuario): boolean {

        const indice = this.usuarios.findIndex(
            usuario => usuario.getId() === id
        );

        if (indice === -1) {
            return false;
        }

        const usuarioComId = new Usuario(
            id,
            usuarioAtualizado.getNome(),
            usuarioAtualizado.getEmail(),
            usuarioAtualizado.getSenha()
        );

        this.usuarios[indice] = usuarioComId;

        return true;
    }

    remover(id: number): boolean {

        const indice = this.usuarios.findIndex(
            usuario => usuario.getId() === id
        );

        if (indice === -1) {
            return false;
        }

        this.usuarios.splice(indice, 1);

        return true;
    }
}
