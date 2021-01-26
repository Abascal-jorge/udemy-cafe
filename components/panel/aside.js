import React from 'react';
import { AsideDiv } from "./estilosPanel";


const AsidePanel = () => {
    return ( 
        <AsideDiv>
            <h2>Opciones</h2>
            <aside>
                <details>
                    <summary>Productos</summary>
                    <ul>
                        <li>Agregar</li>
                        <li>Eliminar</li>
                        <li>Actualizar</li>
                    </ul>
                </details>
                <details>
                    <summary>Usuarios</summary>
                    <ul>
                        <li>Agregar</li>
                        <li>Eliminar</li>
                        <li>Actualizar</li>
                    </ul>
                </details>
            </aside>
        </AsideDiv>
     );
}
 
export default AsidePanel;