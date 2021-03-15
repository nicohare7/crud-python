import { client } from "../config/conn.ts";
import { UsuarioDTO } from "../dto/usuario.ts";

export class UsuariosModel {
    async listar() : Promise<UsuarioDTO[]>{
        const usuarios = await client.execute('select * from usuarios');
        return usuarios.rows as UsuarioDTO[];
    }

    async create(usuario: UsuarioDTO) {
        await client.execute('INSERT INTO usuarios (nombre,apellido,celular,correo,password) values (?,?,?,?,?)', [
            usuario.nombre,
            usuario.apellido,
            usuario.celular,
            usuario.correo,
            usuario.password,
        ]);
    }

    async actualizar(user: UsuarioDTO, id: number): Promise <void> {
        await client.execute(`update usuarios set nombre = ?,apellido = ?,celular = ?,correo = ?,password = ? WHERE id = ?`, [
            user.nombre,
            user.apellido,
            user.celular,
            user.correo,
            user.password,
            id,
        ]);
    }


    async eliminar(id: number) : Promise <void>{

        await client.execute('delete from usuarios where id =?', [id])

    }
}