import { AUTENTICANDO_GOOGLE, 
         AUTENTICADO_CORREO } from "../../type/index";


export default (state, action) => {
    switch (action.type) {
        case AUTENTICANDO_GOOGLE:
            localStorage.setItem("token", action.payload);
            return{
                ...state,
                autenticado: true
            }
        case AUTENTICADO_CORREO:
            return{
                ...state,
                autenticado: true
            }
        default:
            return;
    }
}