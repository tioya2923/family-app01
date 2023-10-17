import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import "./Navbar.css";
//import Hamburger from 'hamburger-react';

const Navbar = () => {
    const navigation = [
        { link: "arvore", text: 'Árvore' },
        { link: 'fotografias', text: 'Fotografias' },
        { link: 'videos', text: 'Vídeos' },
        { link: 'audios', text: 'Audios' },
        { link: 'documentos', text: 'Documentos' },
        { link: 'areaPessoal', text: 'Área Pessoal' },
    ];
    const [isOpen, setOpen] = useState(false);
    const toggle = () => setOpen(!isOpen);
    const hide = () => setOpen(false);
    const show = () => setOpen(true);


    return (

        <nav>
            <button className="menu-toggle" onClick={toggle}>
                <span className={`menu ${isOpen ? 'cross' : 'hamburger'}`}></span>
            </button>
            <ul className={`menu-links ${isOpen ? 'show' : ''}`}>
                {navigation.map((nav)=>(
                    <li key={nav.text}>
                        <a href={nav.link} onClick={toggle} onBlur={hide} onFocus={show}>{nav.text}</a>
                    </li>
                ))}
            </ul>
        </nav>

      
    );
}; 

export default Navbar;