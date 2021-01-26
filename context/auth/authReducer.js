import { AUTENTICANDO_USUARIO, 
         MOSTRANDO_ALERTA } from "../../type/index";


export default (state, action) => {
    switch (action.type) {
        case AUTENTICANDO_USUARIO:
            return{
                token: "hola mundo"
            }
        default:
            return;
    }
}