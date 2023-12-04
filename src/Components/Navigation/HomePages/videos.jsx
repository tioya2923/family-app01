import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import videos from '../../Store/StoreDatas.json';
import "../../Styles/videos.css";



const Videos = () => {
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

        <div className='container-video'> <h1>VÍDEOS</h1>
            <div className='carousel-video' ref={carousel}>
                {videos.map((video, index) => {
                    return (
                        <div key={index} className='item-video'>
                            <video className='card-video'
                                width="100%"
                                height={350}
                                controls>
                                <source src={video.video}></source>
                            </video>
                            <div className='info-video'>
                                <span className='name-video'>{video.name}</span>
                                <span className='desc-video'>{video.desc}</span>

                                <NavLink className='readmore-video' to={'/video/' + video.type}>
                                    Saiba Mais</NavLink>
                            </div>
                            
                        </div>
                    )
                })}
            </div>
            {/*
            <div className='buttons'>
                <button onClick={handleLeftClick} className='left-video'>&lsaquo;</button>
                <button onClick={handleRightClick} className='right-video'>&rsaquo;</button>
            </div> */}
        </div>
    );
}


export default Videos;



