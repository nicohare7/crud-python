import {mysql} from '../modules.ts';
const {Client} = mysql;


export const client = await new Client().connect({
    hostname: 'localhost',
    username: 'root',
    db: 'usuarios',
    password: '12345',
    port: 3806,
});


