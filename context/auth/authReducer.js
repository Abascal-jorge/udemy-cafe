import { AUTENTICANDO_GOOGLE, 
         AUTENTICADO_CORREO, 
         VALIDAR_TOKEN } from "../../type/index";


export default (state, action) => {
    switch (action.type) {
        case AUTENTICANDO_GOOGLE:
        case AUTENTICADO_CORREO:
        case VALIDAR_TOKEN:
            localStorage.setItem("token", action.payload.token);
            //localStorage.setItem("usuario", JSON.stringify(action.payload.usuario));
            return{
                ...state,
                autenticado: true,
                usuario: action.payload.usuario
            }
        default:
            return;
    }
}