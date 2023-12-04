import React, { useRef } from 'react';
import fotos from '../../Store/StoreDatas.json';
import { NavLink } from 'react-router-dom';
import "../../Styles/fotografias.css";



const Fotografias = () => {
    const carousel = useRef(null);

{/*
    const handleLeftClick = (e) => {
        e.preventDefault();
        console.log(carousel.current.offsetWidth);
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }

    const handleRightClick = (e) => {
        e.preventDefault();
        console.log(carousel.current.offsetWidth);
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    }
*/}
    return (

        <div className='container'> <h1>FOTOGRAFIAS</h1>
            <div className='carousel-foto' ref={carousel}>
                {fotos.map((foto, index) => {
                    return (

                        <div key={index} className='item'>
                            <img className='card-foto'
                               width="100%"
                               height="100%"
                                src={foto.foto} alt='' />

                            <div className='info'>
                                <span className='name'> {foto.name}</span>
                                <span className='desc'> {foto.desc}</span>


                                <NavLink className='readmore' to={'/foto/' + foto.type}>
                                    Saiba Mais</NavLink>


                            </div>

                        </div>




                    )
                })}
            </div>
            {/*
            <div className='buttons'>

                <button onClick={handleLeftClick} className='left' >&lsaquo;</button>
                <button onClick={handleRightClick} className='right' >&rsaquo;</button>

            </div>
            */}
        </div>
    );

}


export default Fotografias; 