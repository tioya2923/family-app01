import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import audios from '../../Store/StoreDatas.json';
import "../../Styles/audios.css";


const Audios = () => {
    const carousel = useRef(null);
   /*
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
*/
    return (

        <div className='container-audio'> <h1>AUDIOS</h1>
            <div className='carousel-audio' ref={carousel}>
                {audios.map((audio, index) => {
                    return (
                        <div key={index} className='item-audio'>
                            <audio controls>
                                <source src={audio.audio}></source>
                            </audio>
                            <div className='info-audio'>
                                <span className='name-audio'>{audio.name}</span>
                                <span className='desc-audio'>{audio.desc}</span>
                                <NavLink className='readmore-audio' to={'/audio/' + audio.type}>
                                    Saiba Mais</NavLink>
                            </div>
                        </div>
                    )
                })}
            </div>
            {/*
            <div className='buttons'>

                <button onClick={handleLeftClick} className='left-audio' >&lsaquo;</button>
                <button onClick={handleRightClick} className='right-audio' >&rsaquo;</button>

            </div>* */}
        </div>
    );

}
export default Audios;