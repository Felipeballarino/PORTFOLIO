import React from 'react';
import style from './about.module.css'
import foto from '../../media/AboutPic.jpg'

const About = () =>{

    return(
        <div className={style.container}>
            <div className={style.description}>
                <h3 className={style.h3}>Let me tell you something about me</h3>
                <p className={style.p}>I am a web programming student looking for experience in the market.</p>
                <p className={style.p}>I would like to explore all the knowledge that I have acquired during my studies. I am a person with easy adaptability to a new work group and tasks. I am interested in contributing my skills to the company.</p>
            </div>
            <div className={style.img}>
                <img src={foto} alt =''/>
            </div>

        </div>
    )
}

export default About;