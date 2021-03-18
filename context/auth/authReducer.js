import { AUTENTICANDO_GOOGLE, 
         AUTENTICADO_CORREO, 
         VALIDAR_TOKEN,
         ELIMINAR_SESION,
         LISTADO_USUARIOS,
         LISTADO_MENSAJE,
         USUARIO_PRIVADOS,
         MENSAJES_PRIVADOS} from "../../type/index";


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
        case LISTADO_USUARIOS:
            return{
                ...state,
                activos: action.payload
            }
        case LISTADO_MENSAJE:
            return{
                ...state,
                mensaje: action.payload
            }
        case USUARIO_PRIVADOS:
            return{
                ...state,
                privado: action.payload
            }
        case MENSAJES_PRIVADOS:
            return{
                ...state,
                smsPrivado: action.payload.mensajesPrivados
            }
        default:
            return;
    }
}