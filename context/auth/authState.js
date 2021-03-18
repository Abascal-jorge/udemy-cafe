import React, { useReducer } from 'react';
import authContext from "./authContext";
import authReducer from "./authReducer";
import { AUTENTICANDO_GOOGLE, 
         AUTENTICADO_CORREO,
         VALIDAR_TOKEN,
         ELIMINAR_SESION,
         LISTADO_USUARIOS,
         LISTADO_MENSAJE,
         USUARIO_PRIVADOS,
         MENSAJES_PRIVADOS} from "../../type/index";
import axios from "axios";


const AuthState = ({children}) => {

    const initialState = {
        token: typeof window !== "undefined" ? localStorage.getItem("token") : "",
        autenticado: null,
        usuario: null,
        mensaje: [],
        smsPrivado: [],
        activos: null,
        privado: {
            uid: "",
            nombre: ""
        }
    }

    const [ state, dispatch ] = useReducer(authReducer, initialState);

    //Iniciando sesion con google cuenta gmail
    const iniciandoGoogle = async (id_token) => {
        try {

           const url =  `${process.env.backendURL}/api/auth/google`;
           //console.log( url );
           const respuesta = await axios.post(url, {id_token});

           dispatch({
                type: AUTENTICANDO_GOOGLE,
                payload: respuesta.data
            });

        } catch (error) {
            console.log(error);
        }
    }

    //Iniciando sesion con correo registrado
    const iniciandoCorreo = async ( datos ) => {
        try {   
            const url = `${process.env.backendURL}/api/auth/login`;
            const token = await axios.post(url, datos); 
            //console.log(token.data);
            dispatch({
                type: AUTENTICADO_CORREO,
                payload: token.data
            });
        } catch (error) {
            console.log(error);
        }
    }

    //Validando token, si existe uno ridecciona al page chat
    const validarToken = async ( ) => {
        const token = localStorage.getItem("token");
        try {
            const url = `${process.env.backendURL}/api/auth`;
            const respuesta = await axios(url, {
                headers: { "x-token": token}
            });
    
            dispatch({
                type: VALIDAR_TOKEN,
                payload: respuesta.data
            });
        } catch (error) {
            console.log(error.response.data);
        }
    }

    //Cerrar sesion correo
    const cerrarSesion = () => {
        dispatch({
            type: ELIMINAR_SESION
        });
    }

    //Listar usuarios activos agrega, o quita al usuario si se desconecta
    const listarUsuario = datos => {
        //console.log(datos);
        dispatch({
            type: LISTADO_USUARIOS,
            payload: datos.activos
        });
    }

    //Listar mensajes globales que recciben todos
    const listarMensaje = mensajes => {
        dispatch({
            type: LISTADO_MENSAJE,
            payload: mensajes
        });
    }

    //Agregar usuario privados, seleccionando usuario
    const usuarioPrivado = ( datos ) => {
        dispatch({
            type: USUARIO_PRIVADOS,
            payload: datos
        });
    }

    //MensajesPrivados por usuario
    const mensajesPrivados = (datos) => {
        dispatch({
            type: MENSAJES_PRIVADOS,
            payload: datos
        });
    }

    return ( 
        <authContext.Provider
            value = {
                {   
                    autenticado: state.autenticado,
                    usuario: state.usuario,
                    activos: state.activos,
                    mensaje: state.mensaje,
                    privado: state.privado,
                    smsPrivado: state.smsPrivado,
                    iniciandoGoogle,
                    iniciandoCorreo,
                    validarToken,
                    cerrarSesion,
                    listarUsuario,
                    listarMensaje,
                    usuarioPrivado,
                    mensajesPrivados
                }
            }
        >
            {children}
        </authContext.Provider>
     );
}
 
export default AuthState;

