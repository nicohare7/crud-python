import {UsuariosModel} from "../models/user.ts";
import {UsuarioDTO} from "../dto/usuario.ts";
import {client} from "../config/conn.ts";
import {tools} from "../tools.ts";
import {Context} from 'https://deno.land/x/oak/mod.ts';


const usuariosModel = new UsuariosModel();

export class UsuarioController {
    async listar(context: Context){
        const  usuarios = await usuariosModel.listar();
        context.response.body = usuarios;
    }
    async create(context: Context){
            const usuario = await (context.request.body().value)
            await usuariosModel.create(usuario);
            context.response.body = {
                message: 'Usuario creado correctamente'
            };     
    }
    async update(id:number) {
        const user = tools();
        await usuariosModel.actualizar({
            nombre: user.getNombre(),
            apellido: user.getApellido(),
            celular: user.getCelular(),
            correo: user.getCorreo(),
            password: user.getPassword(),
        }, id);
    }
    async eliminar(id: number){
        await usuariosModel.eliminar(id);
    }

}