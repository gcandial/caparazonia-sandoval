import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <>
            <footer className="bg-dark">
                <div className="text-center p-3" style={{color: 'pink'}}>                    
                    <span>Desarrollado por: Guadalupe Monserrat Sandoval Vizcaíno <FontAwesomeIcon icon={faPaw} /></span>
                </div>
            </footer>
        </>
    );
}

export default Footer