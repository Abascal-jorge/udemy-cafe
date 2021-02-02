//import Head from 'next/head';
//import styles from '../styles/Home.module.css';
import React, { useContext, useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import { Contenedor,
         Formulario } from "../components/esilos";
import authContext from "../context/auth/authContext";
import io from "socket.io-client";
import { useRouter } from "next/router";
import axios from "axios";

const Home = () => {

  //////////////////////Socket configuration//////////////
    const PORTServidor = process.env.backendURL;
    const socket = io(PORTServidor);
    socket.on("connect", () => {
      console.log("Conectado desde froent end");
    });
  ////////////////////////////////////////*/

  const AuthContext = useContext(authContext);
  const { autenticado, agregandoUsuarioGoogle } = AuthContext;
  const router = useRouter();
  
  useEffect(() => {
    if(autenticado){
      router.push("/panelcontrol");
    }
  }, [autenticado])
  

  const responseGoogle = async googleUser => {
    /*let profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    */
    const id_token = googleUser.getAuthResponse().id_token;
    await agregandoUsuarioGoogle(id_token);
  }
  return(
    <Contenedor className="wrapper">
      <Formulario>
        <h2>Iniciar Sesion</h2>
          <div className="campos">
            <label>Correo: </label>
            <input type="email" id="email"/>
          </div>
          <div className="campos">
            <label>Password: </label>
            <input type="password"/>
          </div>
          <input type="submit" value="Iniciar Sesión"/>

          <GoogleLogin
              clientId="967684378270-udba3p6ua4hv3oc9ourv83pfeo2brvn4.apps.googleusercontent.com"
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