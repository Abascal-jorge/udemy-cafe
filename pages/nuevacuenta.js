import React from 'react';
import { Contenedor, Formulario, RadioButton } from "../components/esilos";

const nuevacuenta = () => {
    return ( 
        <Contenedor className="wrapper">
            <Formulario>
                <h2>Crear Cuenta</h2>
                <div className="campos">
                    <label>Nombre: </label>
                    <input type="text" id="nombre"/>
                </div>
                <RadioButton>
                    <label>Role: </label>
                    <div>
                        <div>
                            <label>Administrador</label>
                            <input type="radio" name="tipo"/>
                        </div>
                        <div>
                            <label>Usuario</label>
                            <input type="radio"name="tipo" />
                        </div>
                    </div>
                </RadioButton>
                <div className="campos">
                    <label>Correo: </label>
                    <input type="email" id="email"/>
                </div>
                <div className="campos">
                    <label>Password: </label>
                    <input type="password"/>
                </div>
                <input type="submit" value="Iniciar"/>
            </Formulario>
        </Contenedor>
     );
}
 
export default nuevacuenta;