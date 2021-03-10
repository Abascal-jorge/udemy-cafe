import { AUTENTICANDO_GOOGLE, 
         AUTENTICADO_CORREO, 
         VALIDAR_TOKEN,
         ELIMINAR_SESION,
         ACTIVOS_USUARIOS} from "../../type/index";


export default (state, action) => {
    switch (action.type) {
        case AUTENTICANDO_GOOGLE:
        case AUTENTICADO_CORREO:
            localStorage.setItem("token", action.payload.token);
            //localStorage.setItem("usuario", JSON.stringify(action.payload.usuario));
            return{
                ...state,
                autenticado: true,
                usuario: action.payload.usuario
            }
        case VALIDAR_TOKEN:
            return{
                ...state,
                autenticado: true,
                usuario: action.payload.usuario
            }
        case ELIMINAR_SESION:
            localStorage.removeItem("token");
            return{
                ...state,
                autenticado: false,
                usuario: null
            }
        case ACTIVOS_USUARIOS:
            console.log(action.payload);
            return{
                ...state
            }
        default:
            return;
    }
}