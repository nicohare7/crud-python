import {oak} from  '../modules.ts';
import {UsuarioController} from '../controllers/usuario.ts';
const {Router} = oak;

const usuarioController = new UsuarioController();
const router = new Router();

router
    .get('/usuarios',usuarioController.listar)
    .post('/usuarios', usuarioController.create)
    .delete('/usuarios', usuarioController.delete);

export default router