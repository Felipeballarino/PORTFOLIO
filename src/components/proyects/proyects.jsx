import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import style from './proyects.module.css'
import food from '../../media/food.jpg'
import Proyecto from '../../media/proceso1.jpg'
import proyecto2 from '../../media/proceso2.jpg'


const Proyects =()=>{

    return(
        <div className={style.container}>
                <div className={style.title}>
                    <h2>My Proyects</h2>
                </div>
            <Carousel showThumbs={false} infiniteLoop={true}  className={style.carrusel}>
                <a href='https://github.com/Felipeballarino/PI-FT16-Food'  target="_blank" rel="noreferrer" >
                    <div className={style.contenedorFoto}>
                        <img src={food} alt='' className={style.foto}/>
                        <div className={style.desc}>
                            <span className={style.descSpan} >Proyecto Food App</span>
                        </div>
                    </div>
                </a>
                <div className={style.contenedorFoto}>
                    <img src={Proyecto} alt='' className={style.foto}/>
                    <div className={style.desc}>
                        <span className={style.descSpan} >Proyecto 2</span>
                    </div>
                </div>
                <div className={style.contenedorFoto}>
                    <img src={proyecto2} alt='' className={style.foto}/>
                    <div className={style.desc}>
                        <span className={style.descSpan} >Proyecto 3</span>
                    </div>
                </div>
            </Carousel>

        </div>

    )
}

export default Proyects;