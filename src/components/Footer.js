import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

function Footer() {
    return (
        <>
            <footer className="bg-dark">
                <div className="text-center p-3 pink">
                    <span>Desarrollado por: Guadalupe Monserrat Sandoval Vizcaíno <FontAwesomeIcon icon={faPaw} /></span>
                </div>
            </footer>
        </>
    );
}

export default Footer