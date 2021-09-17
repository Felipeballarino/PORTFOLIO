import React from "react";
import style from './header.module.css'
import HeaderMedia from '../../media/HeaderMedia.mp4'


const Header = () =>{

    return(
        <div className={style.conteiner}>
            <video className={style.video} src ={HeaderMedia} autoPlay loop muted/>
            <h1 className={style.name}>Felipe Ballarino</h1>
            <hr className={style.hr}></hr>
            <p className={style.info}>Full Stack Web Developer</p>
        </div>

    )
}

export default Header;