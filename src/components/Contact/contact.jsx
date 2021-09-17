import React from "react";
import style from './contact.module.css'
import './contact.css'

const Contact = () =>{

    return(
        <div className={style.container}>
            <div className={style.info}>
                <h1>Felipe Ballarino</h1>
                <p>Cordoba - Argentina</p>
            </div>
            <div className={style.contact}>
                <h3>Contact me</h3>
                <span>And let's get down to work.</span>
                <div className={style.number}>
                    <ul>
                        <li className={style.numberLi}>(+549) 3534-196213</li>
                        <li className={style.numberLi}>Felipeballarino97@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div className={style.sns}>
                <div className={style.desingBy}>
                    Desing By Felipe Ballarino
                </div>
                <div className={style.links}>
                    <a href='https://www.linkedin.com/in/felipe-ballarino/' target='_blank' rel="noreferrer">
                        <i className='fab fa-linkedin linkedin' color='white'></i>
                    </a>
                    <a href='https://github.com/Felipeballarino' target='_blank' rel="noreferrer">
                        <i className='fab fa-github github'></i>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Contact;