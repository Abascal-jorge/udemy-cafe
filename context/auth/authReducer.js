import { AUTENTICANDO_GOOGLE, 
         AUTENTICADO_CORREO, 
         VALIDAR_TOKEN } from "../../type/index";


export default (state, action) => {
    switch (action.type) {
        case AUTENTICANDO_GOOGLE:
        case AUTENTICADO_CORREO:
            localStorage.setItem("token", action.payload.token);
            return{
                ...state,
                autenticado: true,
                usuario: action.payload.usuario
            }
        case VALIDAR_TOKEN:
            localStorage.setItem("token", action.payload.token);
            return{
                ...state,
                usuario: action.payload.usuario,
                autenticado: true
            }
        default:
            return;
    }
}