import React from 'react';

const Layouts = props => {
    return ( 
        <>
            <h1>Titulo header</h1>
            <main>
                {props.children}
            </main>
            <footer>
                <h2>Pie de pagina jorge abascal lopez</h2>
            </footer>
        </>
     );
}
 
export default Layouts;