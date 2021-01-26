import React from 'react';
//import { AsideDiv } from "./estilosPanel";


const AsidePanel = () => {
    return ( 
        <div>
            <h2>Opciones</h2>
            <aside>
                <ul>
                    <li>
                        <a>Productos</a>
                        <ul>
                            <li>Agregar</li>
                            <li>Eliminar</li>
                            <li>Actualizar</li>
                        </ul>
                    </li>
                </ul>
            </aside>
        </div>
     );
}
 
export default AsidePanel;