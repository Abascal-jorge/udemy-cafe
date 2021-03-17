//import Head from 'next/head';
//import styles from '../styles/Home.module.css';
import React, { useEffect, useContext, useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { Contenedor,
         Formulario } from "../components/esilos";
import authContext from "../context/auth/authContext";
import { useRouter } from 'next/router'

const Home = () => {
  const router = useRouter();
  //Context Funciones authState  
  const AuthContext = useContext(authContext);
  const { iniciandoGoogle, 
          iniciandoCorreo, 
          validarToken, 
          autenticado } = AuthContext;


  //UseState para recompilar los datos de los inputs
  const [ datos, setDatos ] = useState({
      correo: "",
      password: "",
  });
  const { correo, password } = datos;
  
  const obtenerDatos = ( e ) => {
      setDatos({
        ...datos,
        [e.target.name] : e.target.value
      });
  }

  const onSubmitDatos = async (e) => {
      e.preventDefault();
      await iniciandoCorreo(datos);
  }

  const responseGoogle = async googleUser => {
    /*let profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    */
    const id_token = googleUser.getAuthResponse().id_token;
    //console.log(id_token);
    await iniciandoGoogle( id_token );
  }

  useEffect(() => {
      if(autenticado){
          router.push("/chat");
      }if( localStorage.getItem("token") ){
        //console.log( localStorage.getItem("token") );
        validarToken();
      }
  }, [autenticado])

  return(
    <Contenedor className="wrapper">
      <Formulario 
        onSubmit = { onSubmitDatos }
      >
        <h2>Iniciar Sesion</h2>
          <div className="campos">
            <label>Correo: </label>
            <input 
              name="correo"
              placeholder="Ingresa tu correo aquí"
              type="email"
              value={correo}
              onChange={obtenerDatos}
            />
          </div>
          <div className="campos">
            <label>Password: </label>
            <input 
              type="password"
              placeholder="Ingresa tu contraseña aqui"
              name="password"
              value={password}
              onChange={obtenerDatos}
            />
          </div>
          <input type="submit" value="Iniciar Sesión"/>

          <GoogleLogin
              clientId="967684378270-lovb56upvdlhp729pjdihr92pfhd5lb4.apps.googleusercontent.com"
              buttonText="Iniciar Sesión Google"
              onSuccess={responseGoogle}
              cookiePolicy={'single_host_origin'}
              className="google"
          />
         
      </Formulario>
    </Contenedor>
  )
}

export default Home;