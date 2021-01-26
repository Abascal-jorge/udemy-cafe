import React from 'react';
//import { HeaderPanel } from "./estilosPanel";

const Header = () => {
    return ( 
        <div className="contenedor">
            <header>
                <div>
                    <img srcSet="https://lh3.googleusercontent.com/a-/AOh14GjZdzf9-6qdw-FCuyGr_fSpDFMF2kbvXXie0aZq=s96-c" alt="Fot-perfil"/>
                </div>
                <div>
                    <ul>
                        <li><a>Salir</a></li>
                        <li><a>Perfil</a></li>
                    </ul>
                </div>
            </header>
        </div>
     );
}
 
export default Header;