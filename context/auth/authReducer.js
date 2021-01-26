import { AUTENTICANDO_USUARIO, 
         MOSTRANDO_ALERTA } from "../../type/index";


export default (state, action) => {
    switch (action.type) {
        case AUTENTICANDO_USUARIO:
            localStorage.setItem("token", action.payload.token);
            return{
                ...state,
                autenticado: true
            }
        default:
            return;
    }
}