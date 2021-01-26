import React from 'react';
import { HeaderPanel } from "./estilosPanel";

const Header = () => {
    return ( 
        <HeaderPanel>
            <header>
                <div>
                    <img srcSet="https://lh3.googleusercontent.com/a-/AOh14GjZdzf9-6qdw-FCuyGr_fSpDFMF2kbvXXie0aZq=s96-c" alt="Fot-perfil"/>
                </div>
                <div>
                    <ul>
                        <li><a href="#">Salir</a></li>
                        <li><a href="#">Perfil</a></li>
                    </ul>
                </div>
            </header>
        </HeaderPanel>
     );
}
 
export default Header;